import { Router } from "express";
import * as AccountCourseController from "../controllers/accountCourse.controller.js";

const router = Router();

router
    .route("/:accountId/:courseId")
    .get(AccountCourseController.getAccountCourse);

router.route("/create").post(AccountCourseController.createAccountCourse);

export default router;
