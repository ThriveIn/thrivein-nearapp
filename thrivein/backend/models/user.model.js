import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true },
    password: String,
    jobProfile: String,
    location: String,
    bio: String,
    status: {
      type: String,
      enum: ["Pending", "Active", "Disabled"],
      default: "Pending",
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
    profileImage: String,
    createdAt: { type: Date, default: Date.now },
  })
);

export default User;
