import mongoose from "mongoose";
import Employee from "./EmployeeModel";

const countrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  countryCode: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  isdCode: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
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

const CountryModel =
  mongoose.models.Country || mongoose.model("Country", countrySchema);

export default CountryModel;
