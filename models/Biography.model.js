const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const biographySchema = new Schema (
    {
        biographyText: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("biography", biographySchema);