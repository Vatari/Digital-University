const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const sessionSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  presenter: { type: String, required: [true, "Presenter is required"] },
  duration: { type: Number, required: true },
  level: { type: String, required: true },

  abstract: { type: String, required: true },

  voters: { type: [ObjectId], ref: "User" },
  owner: { type: ObjectId, ref: "User" },

  parentId: { type: ObjectId, ref: "Item" },
});

const Session = model("Session", sessionSchema);

module.exports = Session;
