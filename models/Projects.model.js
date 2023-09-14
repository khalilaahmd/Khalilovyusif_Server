const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const projectSchema = new Schema(
    {
        folder: {
            type: String,
            enum: [
                'Christmas Design',
                'Art Projects',
                'Special Events',
                'Boutonniers And Gifts',
                'Flowers',
                'Bouquets'
            ]
        },
        title: String,
        url: String,
    },
    {
        timestamps: true
    }
);

module.exports = model("Project", projectSchema);