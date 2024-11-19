import CourseDetailModel from "../models/courseDetail.model.js";

// write function getCourseDetailsByCourseId to get course details by course id
export const getCourseDetailsByCourseId = async (req, res) => {
    try {
        // get course id from req.params
        const { courseId } = req.params;
        // find course by course id
        const course = await CourseDetailModel.findOne({ courseId });
        // if course not found, return 404 error
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        // return course details
        return res.status(200).json(course);
    } catch (error) {
        // return 500 error if error
        return res.status(500).json({ message: error.message });
    }
};
// write function createCourseDetails to create course details
export const createCourseDetail = async (req, res) => {
    try {
        // get course details from req.body
        const {
            author,
            avatar,
            work,
            desc,
            benefit,
            price,
            discount,
            courseName,
            slug,
            rating,
            numberRating,
            source,
            courseId,
        } = req.body;
        // create course details
        const courseDetail = new CourseDetailModel({
            author,
            avatar,
            work,
            desc,
            benefit,
            price,
            discount,
            courseName,
            slug,
            rating,
            numberRating,
            source,
            courseId,
        });
        // save course details
        await courseDetail.save();
        // return course details
        return res.status(201).json(courseDetail);
    } catch (error) {
        // return 500 error if error
        return res.status(500).json({ message: error.message });
    }
};
