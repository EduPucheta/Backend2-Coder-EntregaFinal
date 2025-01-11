import productsRouter from "./product.router.js"
import cartsRouter from "./cart.router.js"
import userRouter from "./user.router.js"
import authRouter from "./auth.router.js"
import sessionsRouter from "./sessions.router.js"
import { Router } from "express"

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/sessions", sessionsRouter);


export default router;