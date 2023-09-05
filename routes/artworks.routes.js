const express = require ("express");
const router = express.Router();
const mongoose = require('mongoose');

const Artwork = require ("../models/Artworks.model");

const fileUploader = require ("../config/cloudinary.config");

// GET 'api/artworks
router.get ("/artworks", (req, res, next) => {
    Artwork
          .find()
          .then((artworksFromDB) => res.status(200).json(artworksFromDB))
          .catch((error) => next (error));
});

// GET "/api/artworks/:artworksId"
router.get('/artworks/:artworksId', (req, res, next) => {
    const { artworksId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(artworksId)) {
        res.status(400).json({ message: 'Specified Id is not valid'});
        return;
    }
    Artwork
         .findById(artworksId)
         .then(artwork => res.status(200).json(artwork))
         .catch(error => res.json(error));
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

// DELETE "/api/artworks/:artworksId"
router.delete('/artworks/:artworksId', (req, res, next) => {
    const { artworksId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(artworksId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Artwork
           .findByIdAndRemove(artworksId)
           .then(() => res.json({ message: `Artwork with ${artworkId} is removed successfully`}))
           .catch(error => res.json(error));
});

module.exports = router;