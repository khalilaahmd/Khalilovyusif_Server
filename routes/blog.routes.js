const express = require ("express");
const router = express.Router();
// const { route } = require("./index.routes");
const Blog = require("../models/Blog.model")

// GET "/api/blog"
router.get("/blogs", (req, res, next) => {
    Blog
       .find()
       .then((blogsFromDB) => res.status(200).json(blogsFromDB))
       .catch((error) => next (error));
});

// POST "/api/blogs"
router.post("/blogs", (req, res, next) => {
    console.log("hello");
    Blog
       .create(req.body)
       .then((createdBlog) => {
        console.log("Created new blog: ", createdBlog);
        res.status(200).json(createdBlog);
       })
       .catch((error) => next(error));
});

module.exports = router;
