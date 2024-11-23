import express from "express";

import * as CartController from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/:accountId").get(CartController.getCartByAccountId);

router.route("/create").post(CartController.createCart);

router.route("/update/:accountId").put(CartController.updateCart);

export default router;
