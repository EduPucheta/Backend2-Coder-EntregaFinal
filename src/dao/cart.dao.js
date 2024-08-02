import { cartModel } from "./models/cart.model.js";
import mongoose from "mongoose";

const getById = async (id) => {
  const cart = await cartModel.findById(id);
  return cart;
};

const create = async (data) => {
  const cart = await cartModel.create(data);
  return cart;
};

const addProductToCart = async (cid, pid) => {
  const productInCart = await cartModel.findOneAndUpdate(
    { _id: cid, "products.product": pid },
    { $inc: { "products.$.quantity": 1 } },
    { new: true }
  );
  if (!productInCart) {
    await cartModel.updateOne(
      { _id: cid },
      { $push: { products: { product: pid, quantity: 1 } } }
    );
  }
  const cart = await cartModel.findById(cid);
  return cart;
};

const deleteProductInCart = async (cid, pid) => {
  try {
    const cart = await cartModel.findById(cid);
    if (!cart) {
      throw new Error('Cart not found');
    }
    const productsFilter = cart.products.filter(
      (prod) => prod.product.id.toString() !== pid
    );
    const cartResponse = await cartModel.findByIdAndUpdate(
      cid,
      { $set: { products: productsFilter } },
      { new: true }
    );
    return cartResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const updateQuantityProductInCart = async (cid, pid, quantity) => {
  const cart = await cartModel.findOneAndUpdate(
    { _id: cid, "products.product": pid },
    { $set: { "products.$.quantity": quantity } },
    { new: true }
  );
  return cart;
};

const deleteAllProductsInCart = async (cid) => {
  const cart = await cartModel.findByIdAndUpdate(
    cid,
    { $set: { products: [] } },
    { new: true }
  );
  return cart;
};

export default {
  getById,
  create,
  addProductToCart,
  deleteProductInCart,
  updateQuantityProductInCart,
  deleteAllProductsInCart,
};
