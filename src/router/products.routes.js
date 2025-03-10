import { Router } from "express";
import { checkProductData } from "../middlewares/checkProductData.middleware.js";
import productsControllers from "../controllers/products.controllers.js";
import { authorization } from "../middlewares/authorization.middleware.js";
import { passportCall } from "../middlewares/passport.middleware.js";

const router = Router();

router.get("/", productsControllers.getAllProducts);

router.get("/:pid", productsControllers.getProductById);

router.delete("/:pid", passportCall("jwt"), authorization("admin"), productsControllers.deleteProduct);

router.put("/:pid", passportCall("jwt"),authorization('admin'), productsControllers.updateProduct);

router.post("/", passportCall("jwt"), authorization('admin'), checkProductData, productsControllers.createProduct);

export default router;
