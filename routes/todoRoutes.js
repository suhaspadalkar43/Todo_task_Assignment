import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controller/todoController.js";

const router = express.Router();

// Retrieve all tasks
router.get("/tasks", getTasks);

// Create a new task
router.post("/task", createTask);

// Update a task by ID
router.put("/task/:id", updateTask);

// Delete a task by ID
router.delete("/task/:id", deleteTask);

export default router;
