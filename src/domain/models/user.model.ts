import mongoose from "mongoose";

import { UserInterface } from "../interfaces/user";

const schema = new mongoose.Schema<UserInterface>({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    authentication: {
        password: {
            type: String,
            required: true,
            select: false,
        },
        salt: {
            type: String,
            select: false,
        },
        sessionToken: {
            type: String,
            select: false,
        },
    },
}, {
    timestamps: true,
});

const UserModel = mongoose.model('User', schema);

export { UserModel }
