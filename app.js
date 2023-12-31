// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Import middleware
const { isAuthenticated } = require ("./middleware/jwt.middleware");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

// Handling the artworks route
const artworksRouter = require ("./routes/artworks.routes");
app.use("/api", artworksRouter);

// Handling the blog route
const blogRoute = require("./routes/blog.routes");
app.use("/api", blogRoute);

// Handling the media
const mediaRoute = require("./routes/media.routes");
app.use("/api", mediaRoute);

// Handling the subscription 
const subscriptionRoute = require ("./routes/subscription.routes");
app.use("/api", subscriptionRoute);

// Handling the biography
const biographyRoute = require ("./routes/biography.routes");
app.use("/api", biographyRoute);

// Handling the auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Handling the projects route
const projectRoute = require("./routes/projects.routes");
app.use("/api", projectRoute);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
