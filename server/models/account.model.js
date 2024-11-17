import mongoose from "mongoose";

const AccountSchema = mongoose.Schema({
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    dob: { type: Date, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isTeacher: { type: Boolean, required: true, default: false },
});

const AccountModel =
    mongoose.models.Account || mongoose.model("Account", AccountSchema);

export default AccountModel;
