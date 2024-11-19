// write function to get all teachers and function to create a teacher

import TeacherModel from "../models/teacher.model.js";
import connect from "../database/connect.js";

export async function getAll(req, res) {
    await connect();
    try {
        const response = await TeacherModel.find();
        if (!response) {
            return res.status(404).json({ message: "No teacher found" });
        }
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export async function createTeacher(req, res) {
    await connect();
    try {
        const newTeacher = new TeacherModel(req.body);
        const response = await newTeacher.save();
        if (!response) {
            return res.status(400).json({ message: "Bad request" });
        }

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
