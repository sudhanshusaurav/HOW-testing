import mongoose from "mongoose";
import Employee from "./EmployeeModel";

const stateSchema = new mongoose.Schema({
  name: {
    type: String, // Changed to String constructor
    required: true,
  },
  slug: {
    type: String, // Changed to String constructor
    required: true,
    unique: true,
  },
  stateCode: {
    type: String, // Changed to String constructor
    unique: true,
    lowercase: true,
    required: true,
  },
  countryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
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
  overview: {
    type: String, // Changed to String constructor
  },
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

// Consistent model name "State" (singular form, as is convention)
const StateModel =
  mongoose.models.State || mongoose.model("State", stateSchema);

export default StateModel;
