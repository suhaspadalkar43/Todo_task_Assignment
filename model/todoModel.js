import mongoose from "mongoose"; 
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"], // Custom error message
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  createdBy: {
    type: String,
    required: [true, "CreatedBy is required"],
  },
});

export default mongoose.model("Todo", todoSchema);