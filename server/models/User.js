const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required."] },
  firstName: { type: String, required: [true, "firstName is required."] },
  lastName: { type: String, required: [true, "lastName is required."] },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { username: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);
const User = model("User", userSchema);

module.exports = User;
