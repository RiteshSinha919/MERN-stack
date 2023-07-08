const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch(() => {
    console.error("Error connecting to db", err);
  });

app.get("/", (req, res) => {
  res.send("MongoDB");
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
