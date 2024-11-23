import mongoose from "mongoose";

const courseSavedSchema = new mongoose.Schema(
    {
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        courses: Array,
    },
    {
        timestamps: true,
    }
);

const CourseSaved =
    mongoose.models.CourseSaved ||
    mongoose.model("CourseSaved", courseSavedSchema);

export default CourseSaved;
