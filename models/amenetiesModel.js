import mongoose from "mongoose";

const amenetiesSchema = new mongoose.Schema({
  name: String,
  icon: String,
});

const Ameneties =
  mongoose.models.Ameneties || mongoose.model("Ameneties", amenetiesSchema);

export default Ameneties;
