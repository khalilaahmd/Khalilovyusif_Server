const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects.model");

// GET "/api/projects"
router.get("/projects", (req, res, next) => {
    Projects
        .find()
        .then((projectFromDB) => res.status(200).json(projectFromDB))
        .catch((error) => next (error));
});

// GET "/api/christmasDesigns"
router.get("/christmasDesigns", (req, res, next) => {
    Projects
        .find({ folder: 'Christmas Design' })
        .then((christmasDesignsFromDB) => res.status(200).json(christmasDesignsFromDB))
        .catch((error) => next (error));
})

// GET "/api/artProjects"
router.get("/artProjects", (req, res, next) => {
    Projects
        .find({ folder: 'Art Projects' })
        .then((artProjectsDesignsFromDB) => res.status(200).json(artProjectsDesignsFromDB))
        .catch((error) => next (error));
})

// GET "/api/specialEvents"
router.get("/specialEvents", (req, res, next) => {
    Projects
        .find({ folder: 'Special Events' })
        .then((specialEventsFromDB) => res.status(200).json(specialEventsFromDB))
        .catch((error) => next (error));
})

// GET "/api/boutonniersAndGifts"
router.get("/boutonniersAndGifts", (req, res, next) => {
    Projects
        .find({ folder: 'Boutonniers And Gifts' })
        .then((boutonniersAndGiftsFromDB) => res.status(200).json(boutonniersAndGiftsFromDB))
        .catch((error) => next (error));
})

// GET "/api/flowers"
router.get("/flowers", (req, res, next) => {
    Projects
        .find({ folder: 'Flowers' })
        .then((flowersFromDB) => res.status(200).json(flowersFromDB))
        .catch((error) => next (error));
})

// GET "/api/bouquets"
router.get("/bouquets", (req, res, next) => {
    Projects
        .find({ folder: 'Bouquets' })
        .then((bouquetsFromDB) => res.status(200).json(bouquetsFromDB))
        .catch((error) => next (error));
})

// POST "/api/projects"
router.post("/projects", (req, res, next) => {
    Projects
       .create(req.body)
       .then((createdProject) => {
            console.log("Created new project: ", createdProject);
            res.status(200).json(createdProject);
   })
   .catch((error) => next (error));
});
module.exports = router;