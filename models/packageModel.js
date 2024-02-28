import mongoose from "mongoose";
import DestinationModel from "./destinationModel";
import Employee from "./EmployeeModel";
import Category from "./categoryModel";

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

const ItineraryDaySchema = new mongoose.Schema({
  title: String,
  overview: String,
  breakfast: Boolean,
  lunch: Boolean,
  dinner: Boolean,
  destinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Destination",
      required: false,
    },
  ],
  activities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Activity",
      required: false,
    },
  ],
  transferType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
  transferFrom: String,
  transferTo: String,
});

const packageSchema = new mongoose.Schema(
  {
    countryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    states: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        required: false,
      },
    ],
    destinations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
      },
    ],
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // This should match the name you used while creating the Ameneties model
      },
    ],
    isGroupTour: {
      type: Boolean,
      default: false,
    },
    reviewCount: {
      type: Number,
      required: false,
    },
    totalNights: {
      type: Number,
    },
    startingLocation: {
      type: String,
    },
    endingLocation: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    overview: String,
    highlights: String,
    itineraryDays: {
      type: [ItineraryDaySchema],
      default: [],
    },
    activities: String,
    thingsToKnow: String,
    weather: String,
    bestTimeToVisit: {
      months: [Number],
      description: String,
    },
    bookingAmount: Number,
    pricing: [
      {
        months: [String],
        price: Number,
        offerPrice: Number,
      },
    ],
    groupPricing: [
      {
        startDate: Date,
        endDate: Date,
        price: Number,
        offerPrice: Number,
      },
    ],
    inclusions: {
      type: String,
    },
    exclusions: {
      type: String,
    },
    paymentPolicy: {
      type: String,
    },
    cancellationPolicy: {
      type: String,
    },
    visaPolicy: {
      type: String,
    },
    faqs: {
      type: [faqSchema],
      default: [],
    },

    images: [
      {
        fileKey: String,
        fileName: String,
        fileUrl: String,
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
  },
  { timestamps: true }
);

const Pkg = mongoose.models.Package || mongoose.model("Package", packageSchema);

export default Pkg;

packageSchema.virtual("itineraryDays.destination", {
  ref: "Destination", // The model to use
  localField: "itineraryDays.destinationId", // Find Destination where `localField`
  foreignField: "_id", // equals `foreignField`
  justOne: true, // Fetch just one Destination, not an array
});

packageSchema.set("toJSON", { virtuals: true });
