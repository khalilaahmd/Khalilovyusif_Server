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
// GET "/api/christmasDesigns/:christmasDesignId"
router.get('/christmasDesigns/:christmasDesignId', (req, res, next) => {
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

// DELETE "/api/christmasDesigns/:christmasDesignId"
router.delete('/christmasDesigns/:christmasDesignId', (req, res, next) => {
    const { christmasDesignId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(christmasDesignId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(christmasDesignId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `ChristmasDesign with ${christmasDesignId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});

// GET "/api/artProjects"
router.get('/artProjects', (req, res, next) => {
    Project
        .find({folder: "Art Projects"})
        .then((artProjectsFromDB) => res.status(200).json(artProjectsFromDB))
        .catch((error) => next(error));
})
// GET "/api/artProjects/:artProjectsId"
router.get('/artProjects/:artProjectsId', (req, res, next) => {
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

// DELETE "/api/artProjects/:artProjectsId"
router.delete('/artProjects/:artProjectsId', (req, res, next) => {
    const { artProjectsId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(artProjectsId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(artProjectsId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `Art Project with ${artProjectsId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});


// GET "/api/specialEvents"
router.get('/specialEvents', (req, res, next) => {
    Project
        .find({folder: "Special Events"})
        .then((specialEventsFromDB) => res.status(200).json(specialEventsFromDB))
        .catch((error) => next(error));
})
// GET "/api/specialEvents/:specialEventsId"
router.get('/specialEvents/:specialEventsId', (req, res, next) => {
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

// DELETE "/api/specialEvents/:specialEventsId"
router.delete('/specialEvents/:specialEventsId', (req, res, next) => {
    const { specialEventsId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(specialEventsId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(specialEventsId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `Special Event with ${specialEventsId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});

// GET "/api/boutonniersAndGifts"
router.get('/boutonniersAndGifts', (req, res, next) => {
    Project
        .find({folder: "Boutonniers And Gifts"})
        .then((boutonniersAndGiftsFromDB) => res.status(200).json(boutonniersAndGiftsFromDB))
        .catch((error) => next(error));
})
// GET "/api/boutonniersAndGifts/:boutonniersAndGiftsId"
router.get('/boutonniersAndGifts/:boutonniersAndGiftsId', (req, res, next) => {
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

// DELETE "/api/boutonniersAndGifts/:boutonniersAndGiftsId"
router.delete('boutonniersAndGifts/:boutonniersAndGiftsId', (req, res, next) => {
    const { boutonniersAndGiftsId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(boutonniersAndGiftsId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(boutonniersAndGiftsId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `Boutonniers And Gifts ID with ${boutonniersAndGiftsId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});

// GET "/api/flowers"
router.get('/flowers', (req, res, next) => {
    Project
        .find({folder: "Flowers"})
        .then((flowersFromDB) => res.status(200).json(flowersFromDB))
        .catch((error) => next(error));
})
// GET "/api/flowers/:flowersId"
router.get('/flowers/:flowersId', (req, res, next) => {
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

// DELETE "/api/flowers/:flowersId"
router.delete('flowers/:flowersId', (req, res, next) => {
    const { flowersId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(flowersId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(flowersId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `Flowers ID with ${flowersId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});

// GET "/api/bouquets"
router.get('/bouquets', (req, res, next) => {
    Project
        .find({folder: "Bouquets"})
        .then((bouquetsFromDB) => res.status(200).json(bouquetsFromDB))
        .catch((error) => next(error));
})
// GET "/api/bouquets/:bouquetsId"
router.get('/bouquets/:bouquetsId', (req, res, next) => {
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

// DELETE "/api/bouquets/:bouquetsId"
router.delete('bouquets/:bouquetsId', (req, res, next) => {
    const { bouquetsId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(bouquetsId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    Project
         .findByIdAndRemove(bouquetsId)
         .then((deleteImage) => {
            if(!deleteImage) {
                res.status(404).json({ message: 'Image not found'});
                return;
            }
            res.json({message: `Bouquets ID with ${bouquetsId} is removed successfully`});
        })
        .catch(error => res.status(500).json({ message: 'Error deleting image', error: error }));
});

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