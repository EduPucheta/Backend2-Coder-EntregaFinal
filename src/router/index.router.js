import productsRouter from "./product.router.js"
import cartsRouter from "./cart.router.js"
import userRouter from "./user.router.js"
import authRouter from "./auth.router.js"
import { Router } from "express"

const router = Router();

router.use("/products", productsRouter);
router.use("/carts", cartsRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);


export default router;