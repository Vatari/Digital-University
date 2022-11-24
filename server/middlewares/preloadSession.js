const { getById, getSessionById } = require("../services/event");

module.exports = () => async (req, res, next) => {
  const id = req.params.id;

  try {
    const session = await getSessionById(id).lean();
    session.ownerId = session.owner;
    res.locals.item = session;
    next();
  } catch (err) {
    res.status(404).send({ message: "Record not found" });
  }
};
