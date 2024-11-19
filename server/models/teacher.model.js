//  write the code to define the schema for the teacher model
/*
     "name": "Robert Lewandosky",
    "desc": "IUH University",
    "address": "HCM city",
    "image": "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "background": "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "rating": 4.5,
    "numberRating": 1999,
    "accountId": "60f3b3b3b3b3b3b3b3b3b3b3"


    accountId ref to AccountModel
*/
import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        background: {
            type: String,
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
        accountId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account",
            nullable: true,
        },
    },
    {
        timestamps: true,
    }
);

const TeacherModel =
    mongoose.models.Teacher || mongoose.model("Teacher", TeacherSchema);
export default TeacherModel;
