import express from "express";
import models from "../models/";

const { Cat, Dog } = models;

const router = express.Router();

// handle route
router.post("/", (req, res) => {
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

router.get("/all", (req, res) => {
  Cat.find({}, (err, docs) => {
    if (err) {
      return console.log({ err });
    }
    res.send(docs);
  });
});

export default router;
