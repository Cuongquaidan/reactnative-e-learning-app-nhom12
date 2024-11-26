import express from "express";

import * as CartController from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/:accountId").get(CartController.getCartByAccountId);

router.route("/create").post(CartController.createCart);

router.route("/remove").patch(CartController.removeItem);

router.route("/addCourse/:accountId").patch(CartController.addCourseToCart);

export default router;
