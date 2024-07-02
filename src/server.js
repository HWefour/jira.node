require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const NodeCache = require("node-cache");

const boardRoute = require("./Routes/Routeboard");
const boardByIdRoute = require("./Routes/RouteboardById");
const issueRoute = require("./Routes/RouteIssue");
const createIssue = require("./Routes/RouteCreateIssue");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/board", boardRoute);
app.use("/boardById", boardByIdRoute);
app.use("/issue", issueRoute);
app.use("/createIssue", createIssue);



const port = 7000;
const cache = new NodeCache({ stdTTL: 100 });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(7000, () => {
  console.log(`Server started on port ${port}`);
});


