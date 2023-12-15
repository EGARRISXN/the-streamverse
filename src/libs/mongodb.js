import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI || "mongodb://localhost:27017"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
