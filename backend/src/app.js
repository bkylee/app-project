const express = require("express");
const mongoose = require("mongoose");
const { Sequelize } = require("sequelize");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Connect to PostgreSQL
const sequelize = new Sequelize(process.env.POSTGRES_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;
