const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const subscriptionSchema = new Schema (
    {
        title: {
            type: String,
            enum: ['Mr.', 'Ms.', 'Miss', 'Dr.'],
            required: [true, "Title is required"],
        },
        firstName: {
            type: String,
            required: [true, "First name is required"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            },
    },
    {
        timestamps: true
    }
);

module.exports = model("subscription", subscriptionSchema);