import { Router } from "express";
import AccountRoute from "./account.route.js";

const router = Router();
router.use("/accounts", AccountRoute);

export default router;
