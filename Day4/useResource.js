const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const structure = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
  userDepartment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const resource = mongoose.model("User Model", structure);

mongoose
  .connect("mongodb://127.0.0.1/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  })
  .catch((error) => {
    console.log("Error connecting DB", error);
  });

app.get("/", async (req, res) => {
  try {
    const users = await resource.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/user", async (req, res) => {
  try {
    const users = await resource.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error get req" });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await resource.findById(id);
    if (!user) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error get req" });
  }
});

app.post("/user", async (req, res) => {
  try {
    const { userName, userAge, userDepartment } = req.body;
    const newUser = new resource({ userName, userAge, userDepartment });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error post req" });
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, userAge, userDepartment } = req.body;
    const updatedUser = await resource.findByIdAndUpdate(
      id,
      { userName, userAge, userDepartment },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error put req" });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await resource.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(201).json(deleteUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error delete req" });
  }
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
