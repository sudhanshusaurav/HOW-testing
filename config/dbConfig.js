import mongoose from "mongoose";

export async function connect() {
  const DB = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD,
  );

  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Recommended to avoid DeprecationWarning
    });
    console.log("DB connected");
  } catch (error) {
    console.error("Error connecting to the database", error);
    throw error; // This allows callers to handle the error as they see fit
  }
}
