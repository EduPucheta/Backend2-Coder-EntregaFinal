import { Router } from "express";
import passport from "passport";



const router = Router();

router.post(
  "/register",
  passport.authenticate("register", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

router.post(
  "/login",
  passport.authenticate("login", { session: false }),
  (req, res) => {
    const token = req.token;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.json({ token });
  }
);

export default router;