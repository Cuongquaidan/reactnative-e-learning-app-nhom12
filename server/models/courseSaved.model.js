import mongoose from "mongoose";

const courseSavedSchema = new mongoose.Schema(
    {
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            required: true,
        },
        courses: [
            {
                courseId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Course",
                    required: true,
                },
                title: {
                    type: String,
                    required: true,
                },
                category: {
                    type: String,
                    required: true,
                },
                desc: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                rating: {
                    type: Number,
                    default: 0,
                },
                numberRating: {
                    type: Number,
                    default: 0,
                },
                numberOfLessons: {
                    type: Number,
                    default: 0,
                },
                slug: {
                    type: String,
                    required: true,
                    unique: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                authorId: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const CourseSaved =
    mongoose.models.CourseSaved ||
    mongoose.model("CourseSaved", courseSavedSchema);

export default CourseSaved;
