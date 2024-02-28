import mongoose from "mongoose";
import Employee from "./EmployeeModel";

const query = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  destination: {
    type: String,
  },
  eventDate: {
    type: Date,
    default: null,
  },
  totalNights: {
    type: String,
  },
  totalDays: {
    type: Number,
  },
  querySent: {
    type: Boolean,
    default: false,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  converted: {
    type: Number,
    default: 0,
  },
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
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

const Query = mongoose.models.Query || mongoose.model("Query", query);

export default Query;
