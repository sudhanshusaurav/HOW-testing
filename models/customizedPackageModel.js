import mongoose from "mongoose";
import DestinationModel from "./destinationModel";
import Stay from "./stayModel";

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const ItineraryDaySchema = new mongoose.Schema({
  title: String,
  description: String,
  breakfast: Boolean,
  lunch: Boolean,
  dinner: Boolean,
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: false,
  },
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activity",
    required: false,
  },
  transferType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
  transferFrom: String,
  transferTo: String,
  note: String,
});

const ItineraryStayRoomSchema = new mongoose.Schema({
  room: String,
  adults: Number,
  children: Number,
  infants: Number,
});

const ItineraryStaySchema = new mongoose.Schema({
  checkInDate: {
    type: Date,
    required: true,
  },
  nights: {
    type: Number,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
  },
  stayId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stay",
  },
  totalRooms: {
    type: Number,
    required: true,
  },
  rooms: {
    type: [ItineraryStayRoomSchema],
    default: [],
  },
});

const customizedPackageSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientPhone: {
      type: String,
      required: true,
    },
    clientEmail: String,
    packageType: {
      type: String,
      required: true,
    },
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    stateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
      required: false,
    },
    startingLocation: {
      type: String,
      required: true,
    },
    endingLocation: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    totalNights: {
      type: Number,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    adults: {
      type: Number,
      required: true,
    },
    children: Number,
    infants: Number,
    title: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    description: String,
    stays: {
      type: [ItineraryStaySchema],
      default: [],
    },
    itineraryDays: {
      type: [ItineraryDaySchema],
      default: [],
    },
    galleryImages: [String],
    highlights: String,
    inclusions: {
      type: String,
      required: true,
    },
    exclusions: {
      type: String,
      required: true,
    },
    paymentPolicy: {
      type: String,
      required: true,
    },
    cancellationPolicy: {
      type: String,
      required: true,
    },
    visaPolicy: {
      type: String,
    },
    packageNote: String,
    faqs: {
      type: [faqSchema],
      default: [],
    },
    cost: {
      type: Number,
      required: true,
    },
    bookingAmount: Number,
    tax: Number,
    tcs: Number,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true },
);

const CustomizedPackage =
  mongoose.models.CustomizedPackage ||
  mongoose.model("CustomizedPackage", customizedPackageSchema);

export default CustomizedPackage;

customizedPackageSchema.virtual("itineraryDays.destination", {
  ref: "Destination", // The model to use
  localField: "itineraryDays.destinationId", // Find Destination where `localField`
  foreignField: "_id", // equals `foreignField`
  justOne: true, // Fetch just one Destination, not an array
});

customizedPackageSchema.virtual("stays.stay", {
  ref: "Stay", // The model to use
  localField: "stays.stayId", // Find Destination where `localField`
  foreignField: "_id", // equals `foreignField`
  justOne: true, // Fetch just one Destination, not an array
});

customizedPackageSchema.set("toJSON", { virtuals: true });
