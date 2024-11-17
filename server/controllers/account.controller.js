import bcrypt from "bcryptjs";
import connect from "../database/connect.js";
import AccountModel from "../models/account.model.js";
export async function register(req, res) {
    await connect();
    try {
        const { Accountname, avatar, dob, email, password } = req.body;

        const existingAccount = await AccountModel.findOne({ email });
        if (existingAccount) {
            return res.status(400).json({ message: "Email is already in use" });
        }

        const salt = await bcrypt.genSalt(10); // Tạo salt với độ khó 10
        const hashedPassword = await bcrypt.hash(password, salt); // Mã hóa mật khẩu

        const newAccount = new AccountModel({
            Accountname,
            avatar,
            dob,
            email,
            password,
        });

        const savedAccount = await newAccount.save();

        res.status(201).json({
            message: "Account created successfully",
            account: savedAccount,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const existingAccount = await AccountModel.findOne({ email });
        if (!existingAccount)
            return res.status(404).send({ error: "Email not found" });

        AccountModel.findOne({ email })
            .then((account) => {
                bcrypt
                    .compare(password, account.password)
                    .then(() => {
                        return res.status(200).send({
                            message: "Login Successful...!",
                            accountEmail: account.email,
                        });
                    })
                    .catch((error) => {
                        return res
                            .status(400)
                            .send({ error: "Password does not Match" });
                    });
            })
            .catch((error) => {
                return res.status(404).send({ error: "Email not Found" });
            });
    } catch (error) {
        return res.status(500).send({ error });
    }
}
