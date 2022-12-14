const router = require("express").Router();
const api = require("../services/event");
const { isAuth, isOwner } = require("../middlewares/guards");
const { mapErrors } = require("../util/mappers");
const preload = require("../middlewares/preItem");
const preloadSession = require("../middlewares/preloadSession");

router.get("/", async (req, res) => {
  try {
    res.json(await api.getAll());
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

router.get("/search", async (req, res) => {
  try {
    res.json(await api.getByQuery(req.query));
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

router.get("/:id/sessions", async (req, res) => {
  const itemId = req.params.id;

  try {
    res.json(await api.getSessions(itemId));
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

router.post("/create", isAuth(), async (req, res) => {
  const item = {
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
    location: req.body.location,
    onlineUrl: req.body.onlineUrl,
    sessions: req.body.sessions,
    owner: req.user._id,
  };

  try {
    const result = await api.create(item);
    res.status(201).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.post("/create/session", isAuth(), async (req, res) => {
  const session = {
    name: req.body.name,
    presenter: req.body.presenter,
    duration: req.body.duration,
    level: req.body.level,
    abstract: req.body.abstract,
    voters: req.body.voters,
    owner: req.user._id,
    parentId: req.body._id,
  };

  try {
    const result = await api.createSession(session);

    res.status(201).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.get("/:id", preload(), (req, res) => {
  const item = res.locals.item;
  res.json(item);
});
router.put("/:id/sessions", preload(), isOwner(), async (req, res) => {
  const itemId = req.params.id;

  const item = {
    brand: req.body.brand,
    model: req.body.model,
    description: req.body.description,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    phone: req.body.phone,
  };

  try {
    const result = await api.update(itemId, item);
    res.status(200).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});
router.delete("/session/:id", preloadSession(), isOwner(), async (req, res) => {
  const itemId = req.params.id;

  try {
    await api.deleteById(itemId);
    res.status(204).end();
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.get("/session/like/:id", isAuth(), async (req, res) => {
  const itemId = req.params.id;
  const userId = req.user._id;

  try {
    await api.like(itemId, userId);
    res.status(204).end();
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

module.exports = router;
