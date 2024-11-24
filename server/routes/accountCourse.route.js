import { Router } from "express";
import * as AccountCourseController from "../controllers/accountCourse.controller.js";

const router = Router();

router
    .route("/getList/:accountId")
    .get(AccountCourseController.getAccountCoursesByAccountId);

router.route("/create").post(AccountCourseController.createAccountCourse);
router
    .route("/:accountId/:courseId")
    .get(AccountCourseController.getAccountCourse);

export default router;
