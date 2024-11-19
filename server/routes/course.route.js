import * as CourseController from "../controllers/course.controller.js";
import { Router } from "express";
const router = Router();

// Write route "/" for getAll function in CourseController
router.route("/").get(CourseController.getAll);
// Write route "/create" for createCourse function in CourseController
router.route("/create").post(CourseController.createCourse);

export default router;
