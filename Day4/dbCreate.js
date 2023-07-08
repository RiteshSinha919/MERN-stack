const Resource = require("./Resource");
const mongoose = require("mongoose");

const newResource = [
  {
    name: "amber",
    age: 19,
    description: "Hello! My name is Amber",
  },
  {
    name: "bead",
    age: 24,
    description: "Hello! My name is Bead",
  },
  {
    name: "crue",
    age: 25,
    description: "Hello! My name is crue",
  },
];

mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    Resource.create(newResource)
      .then((savedResource) => {
        console.log("The saved resource used_id is: ", savedResource);
      })
      .catch((error) => {
        console.log("Error saving resource", error);
      });
  })
  .catch((error) => {
    
    console.log("Error connecting mongoDB", error);
  });
