import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    username: String,
    password: String,
    email: String,
    genre: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
