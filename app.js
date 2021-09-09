import express from "express";
import dotenv from "dotenv";
import dbConnect from "./dbConnect";
import routes from "./routers";

// creat express app
const app = express();

// handle middleware
app.use(express.json());

// configure app
dotenv.config();

// port define
const port = process.env.PORT || 8000;

// db connection
dbConnect(port);

// handle use routers
app.use("/cat", routes.catRouters);


// root response
app.get("/", (req, res) => {
  res.send("Well come to gadget-zone!");
});


// run the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
