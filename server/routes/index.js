import { Router } from "express";
import AccountRoute from "./account.route.js";
import CourseRoute from "./course.route.js";
import TeacherRoute from "./teacher.route.js";
import CourseDetailRoute from "./courseDetail.route.js";
import AccountCourseRoute from "./accountCourse.route.js";

const router = Router();
router.use("/accounts", AccountRoute);
router.use("/courses", CourseRoute);
router.use("/teachers", TeacherRoute);
router.use("/courseDetails", CourseDetailRoute);
router.use("/accountCourses", AccountCourseRoute);
export default router;
