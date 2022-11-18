const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = "askldjaskldjskldjaskldjskldjsdklfg";
const blacklist = [];

async function register(username, password) {
  const existing = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });
  if (existing) {
    throw new Error("Username already registered");
  }
  const user = new User({
    username,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  await user.save();

  return createSession(user);
}
async function login(username, password) {
  const user = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });
  if (!user) {
    throw new Error("Incorrect username or password");
  }
  const match = await bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw new Error("Incorrect username or password");
  }
  return createSession(user);
}

function logout(token) {
  blacklist.push(token);
}

function createSession(user) {
  const payload = {
    email: user.email,
    _id: user._id,
  };

  const accessToken = jwt.sign(payload, JWT_SECRET);

  return {
    email: user.email,
    _id: user._id,
    accessToken,
  };
}

function verifySession(token) {
  if (blacklist.includes(token)) {
    throw new Error("Token is invalid");
  }
  const payload = jwt.verify(token, JWT_SECRET);
  return {
    email: payload.email,
    _id: payload._id,
    token,
  };
}

module.exports = {
  register,
  login,
  logout,
  verifySession,
};
