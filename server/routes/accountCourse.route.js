import { Router } from "express";
import * as AccountCourseController from "../controllers/accountCourse.controller.js";

const router = Router();

router.get("/:accountId/:courseId", AccountCourseController.getAccountCourse);
router.post("/create", AccountCourseController.createAccountCourse);

export default router;
