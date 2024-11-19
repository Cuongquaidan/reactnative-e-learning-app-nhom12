// route / for getAll function in TeacherController and route /create for createTeacher function in TeacherController

import * as TeacherController from "../controllers/teacher.controller.js";

import { Router } from "express";

const router = Router();

router.route("/").get(TeacherController.getAll);

router.route("/create").post(TeacherController.createTeacher);

export default router;
