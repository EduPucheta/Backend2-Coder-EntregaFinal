import { Router } from "express";
import cartRepository from "../persistence/mongoDB/cart.repository.js";
import productRepository from "../persistence/mongoDB/product.repository.js";

import cartsControllers from "../controllers/carts.controllers.js";
import { checkProductAndCart } from "../middlewares/checkProductAndCart.middleware.js";
import { authorization } from "../middlewares/authorization.middleware.js";

import { passportCall } from "../middlewares/passport.middleware.js";


const router = Router();

router.post("/", cartsControllers.createCart);

router.get("/:cid",cartsControllers.getCartById);

router.post("/:cid/product/:pid", passportCall("jwt"), authorization("user"), checkProductAndCart, cartsControllers.addProductToCart);

router.delete("/:cid/product/:pid", passportCall("jwt"),authorization("user"), checkProductAndCart, cartsControllers.deleteProductToCart ); 

router.put("/:cid/product/:pid", passportCall("jwt"), authorization("user"), checkProductAndCart, cartsControllers.updateQuantityProductInCart );

router.delete("/:cid", passportCall("jwt"), authorization("user"), cartsControllers.clearProductsToCart);

router.post("/:cid/purchase", passportCall("jwt"), authorization("user"), cartsControllers.purchaseCart)

export default router;
 