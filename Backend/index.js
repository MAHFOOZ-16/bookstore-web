import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error: ", error);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();

// Define root route
app.get("/", (req, res) => {
  res.send("Welcome to the Bookstore API");
});

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
