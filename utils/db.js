const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;