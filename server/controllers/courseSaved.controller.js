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

        return res.status(200).json({ data: courseSaved });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}

export async function addCourseToSaved(req, res) {
    try {
        const courseSaved = await CourseSaved.findOne({
            accountId: req.body.accountId,
        });

        if (!courseSaved) {
            const newCourseSaved = new CourseSaved({
                accountId: req.body.accountId,
                courses: [req.body.course],
            });

            const data = await newCourseSaved.save();

            return res.status(201).json({ data });
        }

        courseSaved.courses.push(req.body.course);

        await courseSaved.save();

        return res.status(201).json({ data: courseSaved });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
}
