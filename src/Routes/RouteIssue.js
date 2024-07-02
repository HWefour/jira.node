const routers = require("express").Router();
const { getIssue } = require("../Controllers/ControllerIssue");


routers.get("/:id", getIssue);


module.exports = routers;