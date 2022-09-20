import mongoose from "mongoose";
import User from "./user.model.js";
import SocialMedia from "./socialMedia.model.js";
import Token from "./token.model.js";

mongoose.Promise = global.Promise;
const db = {};

db.mongoose = mongoose;
db.user = User;
db.socialMedia = SocialMedia;
db.token = Token;

export default db;
