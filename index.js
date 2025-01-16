import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/todoRoutes.js";

const app = express();
app.use(bodyParser.json()); 
dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000; 
const MONGOURL = process.env.MONGO_URL; 

// Connect to MongoDB database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully");
   
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to database:", error));


app.use("/api/todo", route);
