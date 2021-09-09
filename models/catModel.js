import mongoose from "mongoose";

// cats schema
const catSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
});
/// create mongoose model
const Cat = mongoose.model("Cat", catSchema);

export default Cat;
