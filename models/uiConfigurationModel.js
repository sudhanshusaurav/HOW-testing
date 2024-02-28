import mongoose from "mongoose";
import DestinationModel from "./destinationModel";
import CountryModel from "./countryModel";
import Pkg from "./packageModel";
import StateModel from "./stateModel";

const uiConfigurationSchema = new mongoose.Schema({
  countries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
      required: false,
    },
  ],
  destinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: false,
    },
  ],
  packagesGroup1: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: false,
    },
  ],
  packagesGroup2: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: false,
    },
  ],
  packagesGroup3: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: false,
    },
  ],
  states: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: false,
    },
  ],

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

const UiConfiguration =
  mongoose.models.UiConfiguration ||
  mongoose.model("UiConfiguration", uiConfigurationSchema);

export default UiConfiguration;
