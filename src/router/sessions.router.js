import { Router } from "express";
import { verifyToken } from "../utils/jwt.utils.js";
import { userDTO } from "../dto/users.dto.js";

const router = Router();

router.get("/current", async (req, res) => {
  if (!req.cookies.token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  try {
    const userFromToken = verifyToken(req.cookies.token);
    
    res.json({
      message: "Current user",
      user: userDTO(userFromToken),
    });
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
});

export default router;
