const Tasks = require("../models/taskModel");
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = Tasks.find();
    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};
exports.creatTask = async (req, res, next) => {
  try {
    const newTask = await Tasks.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTask,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
