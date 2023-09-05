const express = require("express");
const router = express.Router();
const { route } = require("./index.routes");
const Media = require("../models/Media.model");
const { default: mongoose } = require("mongoose");

// GET "/api/media"
router.get("/media", (req, res, next) => {
    Media
        .find()
        .then((mediaFromDB) => res.status(200).json(mediaFromDB))
        .catch((error) => next (error));
});

// GET "/api/media/:mediaId"
router.get('/media/:mediaId', (req, res, next) => {
    const { mediaId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(mediaId)) {
        res.status(400).json({ message: 'Specified Id is not valid'});
        return;
    }
    Media
        .findById(mediaId)
        .then(media => res.status(200).json(media))
        .catch(error => res.json(error));
});

// POST "/api/media"
router.post("/media", (req, res, next) => {
    Media
       .create(req.body)
       .then((createdMedia) => {
            console.log("Created new media: ", createdMedia);
            res.status(200).json(createdMedia);
   })
   .catch((error) => next (error));
});

// DELETE "/api/media/:mediaId"
router.delete('/media/:mediaId', (req, res, next) => {
    const { mediaId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(mediaId)) {
        res.status(400).json({ message: 'Specified id is not valid'});
        return;
    }
    Media
       .findByIdAndRemove(mediaId)
       .then(() => res.json({ message: `Biography with ${mediaIa} is removed successfully`}))
       .catch(error => res.json(error));
});

module.exports = router;