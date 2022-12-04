const Item = require("../models/Item");
const Session = require("../models/Session");

async function getAll() {
  return Item.find({});
}

async function getByQuery(query) {
  /*  const userId = query.split("=")[1].slice(1, -1);
  const search = query.split("=")[0];
  const searchParams = Object.values(query) */ //Щях да го ползвам за search, nо в крайна сметка трябваше да си направя отделна функция...

  return Item.find({ name: { $regex: query.search, $options: "i" } });
}

function getSessions(itemId) {
  return Session.find({ parentId: itemId }).lean();
}

async function getByYear(query) {
  if (query) {
    const search = query.split("=")[1].slice(1, -1);
    return Item.find({ year: search });
  }
  return Item.find({});
}

function getById(id) {
  return Item.findById(id);
}
function getSessionById(id) {
  return Session.findById(id);
}

async function create(item) {
  const result = new Item(item);

  await result.save();
  return result;
}

async function createSession(session) {
  const result = new Session(session);

  await result.save();
  return result;
}

async function update(id, item) {
  const existing = await Item.findById(id);

  existing.brand = item.brand;
  existing.model = item.model;
  existing.description = item.description;
  existing.year = item.year;
  existing.imageUrl = item.imageUrl;
  existing.price = item.price;
  existing.phone = item.phone;

  await existing.save();
  return existing;
}

async function deleteById(id) {
  await Session.findByIdAndDelete(id);
}

async function like(itemId, userId) {
  const session = await Session.findById(itemId);

  if (session.voters.includes(userId)) {
    throw new Error("You have already liked!");
  }
  session.voters.push(userId);

  await session.save();
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getByYear,
  createSession,
  getSessions,
  like,
  getSessionById,
  getByQuery,
};
