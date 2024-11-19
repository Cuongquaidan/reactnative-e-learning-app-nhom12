import mongoose from "mongoose";

const CourseSchema = mongoose.Schema(
    {
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
            required: true,
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
    {
        timestamps: true,
    }
);

const CourseModel =
    mongoose.models.Course || mongoose.model("Course", CourseSchema);
export default CourseModel;
