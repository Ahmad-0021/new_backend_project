import mongoose from "mongoose";
import { db_name } from "../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${db_name}`
    );
    console.log(
      `connection host of mongoDB:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`mongodb connection error:${error}`);
    throw error;
  }
};
