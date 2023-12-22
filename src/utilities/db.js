import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};

export default connect;
