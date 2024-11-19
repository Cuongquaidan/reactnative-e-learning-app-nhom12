import CourseModel from "../models/course.model.js";
import connect from "../database/connect.js";
// Viết hàm getAll cho CourseModel
export async function getAll(req, res) {
    await connect();
    try {
        const response = await CourseModel.find();
        if (!response) {
            return res.status(404).json({ message: "No course found" });
        }
        return res.status(200).json(courses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

// Viết hàm createCourse cho CourseModel vơi dữ liệu từ req.body là title, category, desc, price, numberOfLessons,numberRating,rating, slug, image, authorId
export async function createCourse(req, res) {
    await connect();
    try {
        const existingCourse = await CourseModel.findOne({
            slug: req.body.slug,
        });
        if (existingCourse) {
            return res.status(400).json({ message: "Course is already exist" });
        }
        const newCourse = new CourseModel(req.body);
        const response = await newCourse.save();
        if (!response) {
            return res.status(400).json({ message: "Bad request" });
        }

        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
