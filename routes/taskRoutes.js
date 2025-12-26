const express = require("express");
const { getAllTasks, creatTask } = require("../controllers/taskController");

const router = express.Router();

router.route("/").get(getAllTasks).post(creatTask);
module.exports = router;
