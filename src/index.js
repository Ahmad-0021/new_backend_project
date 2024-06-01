import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
connectDB();

// import express from "express";
// import mongoose from "mongoose";
// import { config } from "dotenv";
// import { db_name } from "./constants";
// // Load environment variables from .env file

// config();
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_DB_URI}/${db_name}`);
//     console.log("Successfully connected to MongoDB");
//     app.on("error", (error) => {
//       console.log(error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`The app is listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();
