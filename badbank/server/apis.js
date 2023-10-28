const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

// Connect to MongoDB
const { connectToDb, getDb } = require("./db.js");

app.use(express.json());

connectToDb((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Backend server listening on localhost:${port}`);
    });
    db = getDb();
  }
});

app.use(express.static("../public"));
app.use(cors());

app.get("/user/:name/:id", (req, res) => {
  res.send(`User is: ${req.params.name}`);
});

app.get("/users", (req, res) => {
  let users = [];
  db.collection("customers")
    .find()
    .forEach((user) => {
      users.push(user);
    })
    .then(() => {
      res.status(200).json(users);
    });
});

app.post("/createuser", (req, res) => {
  if (!req.body.name || !req.body.email) {
    res.status(500).send("Please make sure email and password included");
  } else {
    db.collection("customers")
      .insertOne({
        name: req.body.name,
        email: req.body.email,
        balance: 100,
      })
      .then((result) => {
        res.status(200).json(result);
      });
  }
});
