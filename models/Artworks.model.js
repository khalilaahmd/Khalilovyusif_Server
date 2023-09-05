const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const artworkSchema = new Schema (
    {
        postUrl: String,
        postTitle: String,
        description: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("artwork", artworkSchema);