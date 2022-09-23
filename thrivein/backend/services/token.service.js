import db from "../models/index.js";

const Token = db.token;

const getTokenByUserId = async (userId) => {
  try {
    const token = await Token.findOne({
      userId,
    });
    return token;
  } catch (error) {
    console.log(`Error Occured, ${error}`);
  }
};

const deleteToken = async (token) => {
  try {
    return await token.deleteOne();
  } catch (error) {
    console.log(`Error Occured, ${error}`);
  }
};

export const tokenService = {
  getTokenByUserId,
  deleteToken,
};
