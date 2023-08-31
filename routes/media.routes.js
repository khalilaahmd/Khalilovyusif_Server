const express = require("express");
const router = express.Router();
const { route } = require("./index.routes");
const Media = require("../models/Media.model");

// GET "/api/media"
router.get("/media", (req, res, next) => {
    Media
        .find()
        .then((mediaFromDB) => res.status(200).json(mediaFromDB))
        .catch((error) => next (error));
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
module.exports = router;