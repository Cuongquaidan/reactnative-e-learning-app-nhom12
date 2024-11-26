import Router from "express";

import * as CourseSavedController from "../controllers/courseSaved.controller.js";

const router = Router();

router.get("/:accountId", CourseSavedController.getCourseSavedByAccountId);

router.post("/course-saved", CourseSavedController.addCourseToSaved);

router.patch("/unsave", CourseSavedController.removeCourseFromSaved);

export default router;
