const { verifySession } = require("../services/users");

module.exports = () => (req, res, next) => {
  const token = req.headers["accesstoken"];

  try {
    if (token) {
      const payload = verifySession(token);
      req.user = {
        username: payload.username,
        _id: payload._id,
        token,
      };
    }

    next();
  } catch (err) {
    res.status(498).json({ message: "Invalid Token, please sign in again" });
  }
};
