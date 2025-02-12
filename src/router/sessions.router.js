import { Router } from "express";
import { verifyToken } from "../utils/jwt.utils.js";

const router = Router();

router.get("/current", async (req, res) => {
  if (!req.cookies.token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const UserFromToken = verifyToken(req.cookies.token);
  res.json({
    message: "Current user",
    token: req.cookies.token,
    user: UserFromToken,
  }); 
});

export default router;
 