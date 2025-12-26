const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: [true, "Enter description for your task"],
  },
  title: {
    type: String,
    required: [true, "Enter a title for your task "],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["Completed", "Upcoming", "Overdue"],
    default: "Upcoming",
  },
});

taskModel = mongoose.model("Tasks", taskSchema);
module.exports = taskModel;
