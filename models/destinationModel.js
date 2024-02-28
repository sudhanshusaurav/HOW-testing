import mongoose from "mongoose";
import Employee from "./EmployeeModel";

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  },
  stateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
    required: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  images: [
    {
      fileKey: String,
      fileName: String,
      fileUrl: String,
    },
  ],

  overview: String,
  attractions: String,
  cultureCuisine: String,
  seoContent: String,
  faqs: [
    {
      question: String,
      answer: String,
    },
  ],
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
  },
});

const DestinationModel =
  mongoose.models.Destination ||
  mongoose.model("Destination", destinationSchema);

export default DestinationModel;
