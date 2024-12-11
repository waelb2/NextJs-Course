import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB is aleardy connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
