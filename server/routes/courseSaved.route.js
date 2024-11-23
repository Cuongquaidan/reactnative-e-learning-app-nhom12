import Router from "express";

import * as CourseSavedController from "../controllers/courseSaved.controller.js";

const router = Router();

router.get(
    "/course-saved/:accountId",
    CourseSavedController.getCourseSavedByAccountId
);

router.post("/course-saved", CourseSavedController.addCourseToSaved);

export default router;
