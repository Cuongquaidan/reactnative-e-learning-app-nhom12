/*
    Write model for courseDetail
      const dataCourseSample = {
        author: "Sara Weise",
        avatar: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        work: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis asperiores voluptates quisquam. Consequatur aut nulla quaerat velit explicabo unde saepe molestiae non nostrum exercitationem? Explicabo ex tempora voluptates! Laborum.",
        benefit: [
            "14 hours on-demand video",
            "Native teacher",
            "100% free document",
            "Full lifetime access",
            "Certificate of complete",
            "24/7 support",
        ],
        price: 59,
        discount: 20,
        courseName: "UX Foundation: Introduction to User Experience Design",
        slug: "UX-UI-foundation",
        rating: 4.5,
        numberRating: 1880,
        source: [
            {
                title: "I - Introduction",
                stt: 1,
                lessons: [
                    {
                        name: "Amet adipisicing consectetur",
                        stt: 1,
                        video: "udpJ0v9VOz4",
                        duration: 90,
                    },
                    {
                        name: "Adipisicing dolor amet occaeca",
                        stt: 2,
                        video: "KVHimR1vf0o",
                        duration: 90,
                    },
                ],
            },
            {
                title: "II - Plan for your UX research",
                stt: 2,
                lessons: [
                    {
                        name: "Exercitation elit incididunt esse",
                        stt: 1,
                        video: "Ak1lunhhxQM",
                        duration: 90,
                    },
                    {
                        name: "Duis esse ipsum laboru",
                        video: "I9XXCvvAc4A",
                        duration: 90,
                    },
                    {
                        name: "Labore minim reprehenderit pariaturea deserunta",
                        stt: 3,
                        video: "dctiUAs5i68",
                        duration: 90,
                    },
                ],
            },
            {
                title: "III - Conduct UX research",
                stt: 3,
                lessons: [],
            },
            {
                title: "IV - Articulate findings",
                stt: 4,
                lessons: [],
            },
        ],
    };
*/

import mongoose from "mongoose";

const courseDetailSchema = mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        work: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        benefit: {
            type: Array,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            required: true,
        },
        courseName: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        numberRating: {
            type: Number,
            required: true,
        },
        source: {
            type: Array,
            required: true,
        },
        courseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const CourseDetailModel =
    mongoose.models.CourseDetail ||
    mongoose.model("CourseDetail", courseDetailSchema);

export default CourseDetailModel;
