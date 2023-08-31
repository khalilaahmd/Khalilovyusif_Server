const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mediaSchema = new Schema (
    {
        url: String,
        date: String,
        title: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("media", mediaSchema);