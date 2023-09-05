const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mediaSchema = new Schema (
    {
        url: String,
        date: String,
        title: String,
        mediaPicUrl: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("media", mediaSchema);