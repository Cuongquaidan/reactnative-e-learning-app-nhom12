import * as CourseController from "../controllers/course.controller.js";
import { Router } from "express";
const router = Router();

// Write route "/" for getAll function in CourseController
router.route("/").get(CourseController.getAll);
// Write route "/create" for createCourse function in CourseController
router.route("/create").post(CourseController.createCourse);
// Write route "/:authorId" for getCourseByAuthorId function in CourseController
router.route("/author/:authorId").get(CourseController.getCourseByAuthorId);
// Write route "/search/:searchKey" for getCourseBySearchKey function in CourseController
router.route("/search/:searchKey").get(CourseController.getCourseBySearchKey);
export default router;
