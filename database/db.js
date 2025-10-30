import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;

export const connectToDB = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}/${MONGO_DATABASE_NAME}`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Failed:", error.message);
  }
};
