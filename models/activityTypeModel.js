import mongoose from "mongoose";

const activityTypeSchema = new mongoose.Schema({
  name: String,
  slug: String,
});

const ActivityType =
  mongoose.models.ActivityType ||
  mongoose.model("ActivityType", activityTypeSchema);

export default ActivityType;
