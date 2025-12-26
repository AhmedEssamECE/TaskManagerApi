const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
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
    enum: ["Completed", "Ypcoming", "Overdue"],
  },
});
