import mongoose from "mongoose";
import Users from "./user.model.js";
import SocialMedia from "./SocialMedia.model.js";

mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.users = Users;
db.socialMedia = SocialMedia;

export default db;
