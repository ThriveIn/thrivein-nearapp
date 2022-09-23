import db from "../models/index.js";

const User = db.users;

let getUserFromEmail = async email => {
  try {
    const user = await User.findOne({
      email,
    });
    return user;
  } catch (error) {
    console.log(`Error Occured, ${error}`);
  }
};

let getUserFromId = async _id => {
  try {
    const user = await User.findOne({
      _id,
    });
    return user;
  } catch (error) {
    console.log(`Error Occured, ${error}`);
  }
};

let getUserFromConfirmationCode = async confirmationCode => {
  try {
    const user = await User.findOne({
      confirmationCode,
    });
    return user;
  } catch (error) {
    console.log(`Error Occured, ${error}`);
  }
};

export const userService = {
  getUserFromEmail,
  getUserFromConfirmationCode,
  getUserFromId,
};
