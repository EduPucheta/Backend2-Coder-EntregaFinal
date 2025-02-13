import { Router } from "express";
import { userModel } from "../dao/models/user.model.js";


const router = Router();

router.get("/", async (req, res) => {
  const users = await userModel.find();
  res.json(users); 
});

export default router;