import AccountCourse from "../models/accountCourse.model.js";

export async function getAccountCourse(req, res) {
    try {
        const { accountId, courseId } = req.params;
        const accountCourse = await AccountCourse.findOne({
            accountId,
            courseId,
        });
        if (!accountCourse)
            return res.status(404).json({ message: "AccountCourse not found" });
        return res.status(200).json(accountCourse);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export async function getAccountCoursesByAccountId(req, res) {
    try {
        const { accountId } = req.params;

        const accountCourses = await AccountCourse.find({
            accountId,
        });

        if (!accountCourses || accountCourses.length === 0) {
            return res
                .status(400)
                .json({ message: "AccountCourses not found" });
        }

        return res.status(200).json(accountCourses);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
export async function createAccountCourse(req, res) {
    try {
        const existingAccountCourse = await AccountCourse.findOne({
            accountId: req.body.accountId,
            courseId: req.body.courseId,
        });
        if (existingAccountCourse)
            return res
                .status(400)
                .json({ message: "AccountCourse is already exist" });

        const accountCourse = new AccountCourse(req.body);
        const data = await accountCourse.save();
        if (!data) return res.status(400).json({ message: "Bad request" });
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
