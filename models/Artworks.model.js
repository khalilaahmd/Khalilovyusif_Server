const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const artworkSchema = new Schema (
    {
        postUrl: String,
        selectFolder: String,
        postTitle: String,
        description: String,
        location: String,
        collaboration: String,
        photographer: String
    },
    {
        timestamps: true
    }
);

module.exports = model("artwork", artworkSchema);