import mongoose from "mongoose";

const accountCourseSchema = new mongoose.Schema(
    {
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        process: {
            type: Number,
            default: 0,
            min: 0,
            max: 100,
        },
    },
    {
        timestamps: true,
    }
);

const AccountCourse =
    mongoose.models.AccountCourse ||
    mongoose.model("AccountCourse", accountCourseSchema);

export default AccountCourse;
