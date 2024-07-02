const routers = require("express").Router();
const { getBoardId } = require("../Controllers/ControllerBoardById");

routers.get("/:id" , getBoardId);


module.exports = routers;