import mongoose from "mongoose";

const paswordSchema = mongoose.Schema(
    {
        id: {type: String, required: true},
        username: {type: String, required: true},
        url: {type: String, required: true},
        password: {type: String, required: true},
    }
)

export const Password = mongoose.model('Password', paswordSchema)