import mongoose from "mongoose";

let isConnected = false; // to track connection of db status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URI) console.log("MONGODB_URI is not defined");
  if (isConnected) return console.log(" => using existing database connection");
  try {
    await mongoose.connect(String(process.env.MONGODB_URI));
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
