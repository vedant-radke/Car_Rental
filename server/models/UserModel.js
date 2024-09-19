import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,  
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures email is unique
        match: [/.+\@.+\..+/, "Please enter a valid email address"],  // Basic email format validation
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'owner', 'admin'],  // Define allowed roles
        default: 'user',  // Default role is 'user'
        required: true,
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
