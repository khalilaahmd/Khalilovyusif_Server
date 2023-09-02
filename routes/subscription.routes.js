const express = require("express");
const router = express.Router();
const { route } = require("./index.routes");
const Subscription = require("../models/Subscription.model");

// GET "/api/subscription"
router.get("/subscription", (req, res, next) => {
    Subscription
        .find()
        .then((subscriptionFromDB) => res.status(200).json(subscriptionFromDB))
        .catch((error) => next (error));
});

// POST "/api/subscription"
router.post("/subscription", (req, res, next) => {
    Subscription
       .create(req.body)
       .then((createdSubscription) => {
            console.log("Created new subscription: ", createdSubscription);
            res.status(200).json(createdSubscription);
   })
   .catch((error) => next (error));
});
module.exports = router;