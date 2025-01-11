import { Router } from "express";
import { userModel } from "../models/user.model.js";
import passport from "passport";
import { initializePassport } from "../config/passport.config.js";

const router = Router();

router.get("/", passport.authenticate("jwt") ,async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

export default router;
