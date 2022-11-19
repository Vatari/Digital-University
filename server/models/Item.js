const {
  model,
  Schema,
  Types: { ObjectId },
} = require("mongoose");

const itemSchema = new Schema({
  name: { type: String, required: [true, "Name is required"] },
  date: { type: String, required: [true, "Name is required"] },
  time: { type: String, required: [true, "Time is required"] },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  location: {
    address: { type: String, required: [true, "Address is required"] },
    city: { type: String, required: [true, "City is required"] },
    country: { type: String, required: [true, "Country is required"] },
  },
  onlineUrl: {
    type: String,
    required: [true, "OnlineUrl is reguired is required"],
  },

  sessions: { type: [ObjectId], ref: "Session" },
  owner: { type: ObjectId, ref: "User" },
});

const Item = model("Item", itemSchema);

module.exports = Item;
