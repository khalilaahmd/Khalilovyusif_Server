const express = require ("express");
const router = express.Router();

const Artwork = require ("../models/Artworks.model");

const fileUploader = require ("../config/cloudinary.config");

// GET 'api/artworks
router.get ("/artworks", (req, res, next) => {
    Artwork
          .find()
          .then((artworksFromDB) => res.status(200).json(artworksFromDB))
          .catch((error) => next (error));
});

// POST "/api/upload"
router.post("/upload", fileUploader.single("postUrl"), (req, res, next) => {
    // console.log("file is: ", req.file);

    if (!req.file) {
        next(new Error ("No file uploaded!"));
        return;
    }
    res.json({ fileUrl: req.file.path });
});

// POST "/api/artworks"
router.post("/artworks", (req, res, next) => {
    // console.log("body: ", req.body)

    Artwork
        .create(req.body)
        .then((createdArtwork) => {
            console.log("Created new artwork: ", createdArtwork);
            res.status(200).json(createdArtwork);
        })
        .catch((error) => next(error));
     
});

module.exports = router;