const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogSchema = new Schema (
    {
        url: String,
        date: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("blog", blogSchema);