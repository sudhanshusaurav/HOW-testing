import mongoose from "mongoose";
import Employee from "./EmployeeModel";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  countryCode: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  profileImage: {
    fileKey: String,
    fileName: String,
    fileUrl: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
