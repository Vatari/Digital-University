const router = require("express").Router();
const { isGuest, isAuth } = require("../middlewares/guards");
const { register, login, logout, updateUser } = require("../services/users");
const { mapErrors } = require("../util/mappers");

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (
      req.body.password.trim() == "" ||
      req.body.username.trim() == "" ||
      req.body.firstName.trim() == "" ||
      req.body.lastName.trim() == ""
    ) {
      throw new Error("All fields are required");
    }
    const result = await register(
      req.body.username.trim().toLowerCase(),
      req.body.firstName.trim(),
      req.body.lastName.trim(),
      req.body.password.trim()
    );
    res.status(201).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    const result = await login(
      req.body.username.trim().toLowerCase(),
      req.body.password.trim()
    );
    res.status(200).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.put("/update", isAuth(), async (req, res) => {
  const userId = req.user._id;

  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  try {
    const result = await updateUser(userId, userData);
    res.status(200).json(result);
  } catch (err) {
    const error = mapErrors(err)
      .map((e) => e.msg)
      .join("\n");
    res.status(400).json({ message: error });
  }
});

router.get("/logout", (req, res) => {
  logout(req.user?.token);

  res.status(204).end();
});

module.exports = router;
