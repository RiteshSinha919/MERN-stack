const mongoose = require("mongoose");
const Resource = require("./Resource");

conenctionString = "mongodb://127.0.0.1/myDatabase";
db = "resources";

mongoose
  .connect(conenctionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
    Resource.findByIdAndDelete("64a6da451663fddd0a5e4226")
      .then(() => {
        console.log("item deleted");
      })
      .catch((error) => {
        console.log("Error connecting DB", error);
      });
  })
  .catch((error) => {
    console.log("Error connecting DB", error);
  });

