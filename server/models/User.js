const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required."] },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { username: 1 },
  {
    collation: "en",
    strength: 1,
  }
);
const User = model("User", userSchema);

module.exports = User;
