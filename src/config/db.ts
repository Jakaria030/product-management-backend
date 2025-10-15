import mongoose from "mongoose";
import config from "../config/env";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.mongodbURI as string);

    console.log(`\n\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("\n\nMongoDB connection error !!! ", error);
    process.exit(1);
  }
};

export default connectDB;