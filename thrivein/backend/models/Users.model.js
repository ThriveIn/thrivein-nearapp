import mongoose from "mongoose";

const Users = mongoose.model(
    "User",
    new mongoose.Schema({  
        fullName: String,
        email: { type:String, unique: true},
        password: String,
        walletAddress: String,
        jobProfile: String,
        location: String,
        bio: String,
        verified: Boolean,
        profileImage: String,
        createdAt: { type: Date, default: Date.now }
    })
)

export default Users;