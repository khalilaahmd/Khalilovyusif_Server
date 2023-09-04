const express = require ("express");
const router = express.Router();
const Biography = require("../models/Biography.model");
const { default: mongoose } = require("mongoose");

// GET "/api/biography"
router.get("/biography", (req, res, next) => {
    Biography
       .find()
       .then((BiographyFromDB) => res.status(200).json(BiographyFromDB))
       .catch((error) => next (error));
});

// GET "/api/biography/:biographyId"
router.get('/biography/:biographyId', (req, res, next) => {
    const { biographyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(biographyId)) {
        res.status(400).json({ message: 'Specified Id is not valid'});
        return;
    }
        Biography
             .findById(biographyId)
             .then(biography => res.status(200).json(biography))
             .catch(error => res.json(error));
    });

// POST "/api/biography"
router.post("/biography", (req, res, next) => {
    Biography
       .create(req.body)
       .then((createdBiography) => {
        console.log("Created new biography: ", createdBiography);
        res.status(200).json(createdBiography);
       })
       .catch((error) => next(error));
});

// PUT "/api/biography/:biographyId"
router.put('/biography/:biographyId', (req, res, next) => {
    const { biographyId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(biographyId)) {
        res.status(400).json({ message: 'specified Id is not valid'});
        return;
    }
    Biography
        .findByIdAndUpdate(biographyId, req.body, {new: true})
        .then((updatedBiography) => res.json(updatedBiography))
        .catch(error => res.json(error));
})

// DELETE "/api/biography/:biographyId"
router.delete('/biography/:biographyId', (req, res, next) => {
    const { biographyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(biographyId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Biography
        .findByIdAndRemove(biographyId)
        .then(() => res.json({ message: `Biography with ${biographyId} is removed successfully.`}))
        .catch(error => res.json(error));
});

module.exports = router;
