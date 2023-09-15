const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');

const Project = require ('../models/Projects.model');

const fileUploader = require ('../config/cloudinary.config.project');

// GET "/api/christmasDesign"
router.get('/christmasDesigns', (req, res, next) => {
    Project
        .find({folder: "Christmas Design"})
        .then((christmasDesignFromDB) => res.status(200).json(christmasDesignFromDB))
        .catch((error) => next(error));
})
// GET "/api/christmasDesign/:christmasDesignId"
router.get('/api/christmasDesign/:christmasDesignId', (req, res, next) => {
    const { christmasDesignId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(christmasDesignId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(christmasDesignId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// GET "/api/artProjects"
router.get('/artProjects', (req, res, next) => {
    Project
        .find({folder: "Art Projects"})
        .then((artProjectsFromDB) => res.status(200).json(artProjectsFromDB))
        .catch((error) => next(error));
})
// GET "/api/artProjects/:artProjectsId"
router.get('/api/artProjects/:artProjectsId', (req, res, next) => {
    const { artProjectsId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(artProjectsId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(artProjectsId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// GET "/api/specialEvents"
router.get('/specialEvents', (req, res, next) => {
    Project
        .find({folder: "Special Events"})
        .then((specialEventsFromDB) => res.status(200).json(specialEventsFromDB))
        .catch((error) => next(error));
})
// GET "/api/specialEvents/:specialEventsId"
router.get('/api/specialEvents/:specialEventsId', (req, res, next) => {
    const { specialEventsId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(specialEventsId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(specialEventsId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// GET "/api/boutonniersAndGifts"
router.get('/boutonniersAndGifts', (req, res, next) => {
    Project
        .find({folder: "Boutonniers And Gifts"})
        .then((boutonniersAndGiftsFromDB) => res.status(200).json(boutonniersAndGiftsFromDB))
        .catch((error) => next(error));
})
// GET "/api/specialEvents/:specialEventsId"
router.get('/api/boutonniersAndGifts/:boutonniersAndGiftsId', (req, res, next) => {
    const { boutonniersAndGiftsId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(boutonniersAndGiftsId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(boutonniersAndGiftsId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// GET "/api/flowers"
router.get('/flowers', (req, res, next) => {
    Project
        .find({folder: "Flowers"})
        .then((flowersFromDB) => res.status(200).json(flowersFromDB))
        .catch((error) => next(error));
})
// GET "/api/flowers/:flowersId"
router.get('/api/flowers/:flowersId', (req, res, next) => {
    const { flowersId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(flowersId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(flowersId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// GET "/api/bouquets"
router.get('/bouquets', (req, res, next) => {
    Project
        .find({folder: "Bouquets"})
        .then((bouquetsFromDB) => res.status(200).json(bouquetsFromDB))
        .catch((error) => next(error));
})
// GET "/api/bouquets/:bouquetsId"
router.get('/api/bouquets/:bouquetsId', (req, res, next) => {
    const { bouquetsId } = req.params;
    if(!mongoose.Types.ObjectId.isValid(bouquetsId)) {
        res.status(400).json({ message: "Specified Id is not valid"});
        return;
    }
    Project
        .findById(bouquetsId)
        .then(project => res.status(200).json(project))
        .catch(error => res.json(error));
})

// POST "/api/uploadProject"
router.post("/uploadProject", fileUploader.single("postUrl"), (req, res, next) => {
    if(!req.file) {
        next(new Error ("No project uploaded"));
        return;
    }
    res.json({ fileUrl: req.file.path});
});

// POST "/api/projects"
router.post("/projects", (req, res, next) => {
    Project
       .create(req.body)
       .then((createdProject) => {
        console.log("created new project: ", createdProject);
        res.status(200).json(createdProject);
       })
       .catch((error) => next(error));
});

module.exports = router;