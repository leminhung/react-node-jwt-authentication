const router = require("express").Router();
const { check } = require("express-validator");
const {
  signUp,
  signIn,
  getUsers,
  getToken,
  logOut,
} = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("email", "Invalid email").isEmail(),
    check("password", "Password must be at least 6 chars long").isLength({
      min: 6,
    }),
  ],
  signUp
);

router.get("/users", getUsers);

router.post("/login", signIn);

router.post("/token", getToken);

router.delete("/logout", logOut);

module.exports = router;
