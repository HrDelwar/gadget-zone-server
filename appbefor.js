import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// creat express app
const app = express();

// handle middleware
app.use(express.json());

// configure app
dotenv.config();

// port define
const port = process.env.PORT || 8000;

// db connection
mongoose.connect("mongodb://localhost:27017/gadget-zone", () => {
  console.log("Db connect successfully! Port " + port);
});

// cats schema
const catSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
});

/// create mongoose model
const Cat = mongoose.model("Cat", catSchema);

// handle route
app.post("/cat", (req, res) => {
  const { name, color } = req.body;
  // make document using model
  const kitty = new Cat({ name, color });

  // save document in database
  kitty
    .save()
    .then((savedDoc) => {
      return res.send({ savedDoc });
    })
    .catch((err) => {
      res.send({ err });
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/cats", (req, res) => {
  Cat.find({}, (err, docs) => {
    if (err) {
      return console.log({ err });
    }
    res.send(docs);
  });
});

// run the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
