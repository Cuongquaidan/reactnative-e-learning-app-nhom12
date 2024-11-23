// Write function getCartByAccountId

import Cart from "../models/cart.model.js";

export async function getCartByAccountId(req, res) {
    try {
        const { accountId } = req.params;
        const cart = await Cart.findOne({ accountId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function createCart(req, res) {
    try {
        const existingCart = await Cart.findOne({
            accountId: req.body.accountId,
        });
        if (existingCart) return res.status(200).json(existingCart);

        const cart = new Cart({
            accountId: req.body.accountId,
            courses: [],
        });
        const data = await cart.save();
        if (!data) return res.status(400).json({ message: "Bad request" });
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export async function updateCart(req, res) {
    try {
        const { accountId } = req.params;
        let cart = await Cart.findOne({ accountId });
        if (!cart) {
            cart = new Cart({
                accountId,
                courses: [],
            });
        }
        cart.courses = req.body.courses;
        const data = await cart.save();
        if (!data) return res.status(400).json({ message: "Bad request" });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
