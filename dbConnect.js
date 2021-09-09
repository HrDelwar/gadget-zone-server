import mongoose from "mongoose";

const dbConnect = (port) => {
  // db connection
  mongoose.connect("mongodb://localhost:27017/gadget-zone", () => {
    console.log("Db connect successfully! Port " + port);
  });
};

export default dbConnect;
