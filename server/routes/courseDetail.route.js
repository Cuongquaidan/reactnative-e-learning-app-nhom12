// Write route /:courseId for getCourseDetailByCourseId function in CourseDetailController
// Write route /create for createCourseDetail function in CourseDetailController

import * as CourseDetailController from "../controllers/courseDetail.controller.js";
import { Router } from "express";
const router = Router();

router
    .route("/:courseId")
    .get(CourseDetailController.getCourseDetailsByCourseId);
router.route("/create").post(CourseDetailController.createCourseDetail);

export default router;
