const express = require("express");
const conversorRouter = require("./router/conversorRouter.js");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World<h1>`);
});

app.use(bodyParser.json("application/json"));
app.use(cors());
app.use("/api", conversorRouter);

app.listen(PORT, () => {
  console.log("Servidor Online!");
});
