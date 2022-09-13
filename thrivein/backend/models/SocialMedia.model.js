import mongoose from "mongoose";

const SocialMedia = mongoose.model(
    "SocialMedia",
    new mongoose.Schema({  
        socialMedia: String,
        link: String, 
    })
)

export default SocialMedia;