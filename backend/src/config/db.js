import mongoose from "mongoose";
import dotenv from "dotenv";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.dbURL);
    console.log("Mongodb connected succefully!");
  } catch (err) {
    console.error("erorr connecting", err);
    process.exit(1);
  }
}
