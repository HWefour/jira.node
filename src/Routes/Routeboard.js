const routers = require("express").Router();
const { getBoard } = require("../Controllers/ControllerBoard");


routers.get("/", getBoard);


module.exports = routers;