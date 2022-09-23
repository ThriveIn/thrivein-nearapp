import dotenv from "dotenv";
dotenv.config();

const auth = {
  secret: process.env.API_SECRET_KEY,
  verifySecretKey: process.env.VERIFY_SECRET_KEY,
};

export default auth;
