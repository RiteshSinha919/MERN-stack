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
    Resource.find()
      .then((resource) => {
        console.log("items in resources", resource);
      })
      .catch((error) => {
        console.log("Error connecting DB", error);
      });
  })
  .catch((error) => {
    console.log("Error connecting DB", error);
  });
