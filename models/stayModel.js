import mongoose from "mongoose";

const staySchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  url: String,
  address: String,
  description: String,

  roomTypes: {
    type: [String],
  },
  ameneties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ameneties", // This should match the name you used while creating the Ameneties model
      required: false,
    },
  ],
  highlights: {
    type: String,
  },
  stayImages: {
    type: [String],
  },
  roomImages: {
    type: [String],
  },
  otherStayImages: {
    type: [String],
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

const Stay = mongoose.models.Stay || mongoose.model("Stay", staySchema);

export default Stay;
