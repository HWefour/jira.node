const routers = require("express").Router();
const { createIssue } = require("../Controllers/ControllerCreateIssue");

routers.post("/", createIssue);

module.exports = routers;