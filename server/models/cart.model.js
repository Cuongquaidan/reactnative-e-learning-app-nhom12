import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
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
                courseImage: {
                    type: String,
                    required: true,
                },
                courseTitle: {
                    type: String,
                    required: true,
                },
                coursePrice: {
                    type: Number,
                    required: true,
                },
                courseDiscount: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
