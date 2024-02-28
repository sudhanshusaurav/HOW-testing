import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    unique: true,
  },
  seats: {
    type: Number,
  },
  highlights: {
    type: [String],
  },
  description: {
    type: String,
  },
  image: {
    fileKey: String,
    fileName: String,
    fileUrl: String,
  },
});

const Vehicle =
  mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
