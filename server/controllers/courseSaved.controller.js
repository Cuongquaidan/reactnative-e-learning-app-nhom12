import CourseSaved from "../models/courseSaved.model.js";

export async function getCourseSavedByAccountId(req, res) {
    try {
        const courseSaved = await CourseSaved.findOne({
            accountId: req.params.accountId,
        });

        if (!courseSaved) {
            return res
                .status(404)
                .json({ message: "Course saved not found", error });
        }

        return res.status(200).json(courseSaved);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}
export async function addCourseToSaved(req, res) {
    try {
        // Tìm bản ghi CourseSaved theo accountId
        let courseSaved = await CourseSaved.findOne({
            accountId: req.body.accountId,
        });

        const course = req.body.course; // Dữ liệu của khóa học

        // Nếu chưa có bản ghi, tạo mới
        if (!courseSaved) {
            courseSaved = new CourseSaved({
                accountId: req.body.accountId,
                courses: [course], // Thêm khóa học vào danh sách ngay từ đầu
            });

            const data = await courseSaved.save();

            return res.status(201).json(data);
        }

        // Kiểm tra trùng lặp khóa học trong danh sách
        const isDuplicate = courseSaved.courses.some(
            (item) => item._id.toString() === course._id
        );

        if (isDuplicate) {
            return res.status(409).json({ message: "Course already saved" });
        }

        // Thêm khóa học mới vào danh sách
        courseSaved.courses.push(course);

        const data = await courseSaved.save();

        return res.status(201).json(data);
    } catch (error) {
        console.error("Error in addCourseToSaved:", error); // Log lỗi chi tiết
        return res.status(500).json({ message: "Server Error" });
    }
}

export async function removeCourseFromSaved(req, res) {
    try {
        const courseSaved = await CourseSaved.findOne({
            accountId: req.body.accountId,
        });

        if (!courseSaved) {
            return res.status(404).json({ message: "Course saved not found" });
        }

        courseSaved.courses = courseSaved.courses.filter(
            (item) => item._id.toString() !== req.body.courseId
        );

        const data = await courseSaved.save();

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}
