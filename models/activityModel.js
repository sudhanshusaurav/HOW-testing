import mongoose from "mongoose";
import CountryModel from "./countryModel";
import StateModel from "./stateModel";
import DestinationModel from "./destinationModel";
import Employee from "./EmployeeModel";
import ActivityType from "./activityTypeModel";

const activitySchema = new mongoose.Schema({
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
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },

  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ActivityType",
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  highlights: {
    type: String,
  },
  images: [
    {
      fileKey: String,
      fileName: String,
      fileUrl: String,
    },
  ],
  overview: {
    type: String,
  },
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

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;
