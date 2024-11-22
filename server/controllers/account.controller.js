import bcrypt from "bcryptjs";
import connect from "../database/connect.js";
import AccountModel from "../models/account.model.js";
import Cart from "../models/cart.model.js";

export async function register(req, res) {
    await connect();
    try {
        const { username, email, password } = req.body;

        const existingAccount = await AccountModel.findOne({ email });
        if (existingAccount) {
            return res.status(400).json({ message: "Email is already in use" });
        }

        const salt = await bcrypt.genSalt(10); // Tạo salt với độ khó 10
        const hashedPassword = await bcrypt.hash(password, salt); // Mã hóa mật khẩu

        const newAccount = new AccountModel({
            username,
            email,
            password: hashedPassword,
        });

        const savedAccount = await newAccount.save();

        const cart = new Cart({ accountId: savedAccount._id, courses: [] });
        await cart.save();

        return res.status(201).json({
            message: "Account created successfully",
            account: savedAccount,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
export async function login(req, res) {
    const { email, password } = req.body;
    await connect();
    try {
        const existingAccount = await AccountModel.findOne({ email });
        if (!existingAccount)
            return res.status(404).json({ error: "Email not found" });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingAccount.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Password does not match" });
        }

        return res.status(200).json({
            message: "Login Successful...!",
            email: existingAccount.email,
            name: existingAccount.username,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}
