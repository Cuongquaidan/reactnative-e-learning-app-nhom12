import { Router } from "express";
import * as AccountController from "../controllers/account.controller.js";
const router = Router();

router.route("/register").post(AccountController.register);
router.route("/login").post(AccountController.login);

export default router;
