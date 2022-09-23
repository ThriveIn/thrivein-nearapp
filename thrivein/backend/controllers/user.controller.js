import db from "../models/index.js";

const User = db.user;

const updateUserProfile = (req, res) => {
  const user = req._user;
  let data = req.body;
  delete data["password"];
  delete data["email"];
  delete data["status"];
  delete data["confirmationCode"];
  User.findByIdAndUpdate(user._id, data, { new: true }, (error, obj) => {
    if (error) {
      res.status(404).send({ message: "Something went wrong" });
      return;
    } else {
      res.status(200).send({ message: "Update Successfully" });
    }
  });
};

export const controller = {
  updateUserProfile,
};
