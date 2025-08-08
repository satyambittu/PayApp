const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI not found in .env");

    console.log("Connecting to DB at:", uri);
    await mongoose.connect(uri);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error.message);
  }
};

module.exports = dbConnect;
