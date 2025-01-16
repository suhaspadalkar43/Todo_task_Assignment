import Todo from "../model/todoModel.js";

// Add a new task (POST /api/task)
export const createTask = async (req, res) => {
  try {
    const { name, description, createdBy } = req.body;

    // Check if all required fields are provided
    if (!name || !description || !createdBy) {
      return res.status(400).json({ error: "Please provide all mandatory fields." });
    }

    // Save the new task to the database
    const task = new Todo({
      name,
      description,
      createdBy,
    });
    const result = await task.save();

    res.status(201).json(result); 
  } catch (error) {
    res.status(500).json({ error: "Something went wrong on the server." });
  }
};

// Fetch all tasks (GET /api/tasks)
export const getTasks = async (req, res) => {
  try {
    
    const taskList = await Todo.find();
    res.status(200).json(taskList); 
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks. Please try again later." });
  }
};

// Edit a task by ID (PUT /api/task/:id)
export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    
    const updated = await Todo.findByIdAndUpdate(id, updates, {
      new: true, 
      runValidators: true, 
    });

    if (!updated) {
      return res.status(404).json({ error: "No task found with the provided ID." });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating task. Please try again later." });
  }
};

// Remove a task by ID (DELETE /api/task/:id)
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;


    const removed = await Todo.findByIdAndDelete(id);

    if (!removed) {
      return res.status(404).json({ error: "Task not found. Unable to delete." });
    }

    res.status(200).json({ message: "Task successfully deleted." }); // Confirmation message
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task. Please try again later." });
  }
};
