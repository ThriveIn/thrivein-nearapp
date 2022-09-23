import db from "../models/index.js";
import { userService } from "../services/index.js";
import config from "../config/auth.config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
  const user = await userService.getUserFromEmail(req.body.email);
  if (user) {
    res.status(400).send({ message: "Failed! Email is already in use!" });
    return;
  }
  next();
};

const verifyConfirmationToken = async (req, res, next) => {
  const token = req.params.confirmationCode;
  const user = await userService.getUserFromConfirmationCode(token);
  jwt.verify(token, config.verifySecretKey, err => {
    if (err || !user) {
      return res.status(401).send({ message: "Invalid token!" });
    } else if (user.status === "Active") {
      return res.status(200).send({ message: "User Already Verified" });
    } else if (user.status === "Disabled") {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req._user = user;
    next();
  });
};

const checkUserStatus = async (req, res, next) => {
  console.log({ req });
  const user = await userService.getUserFromEmail(req.body.email);
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  if (user.status === "Pending") {
    return res.status(401).send({
      message: "Pending Account. Please Verify Your Email!",
    });
  }
  if (user.status !== "Active") {
    return res.status(401).send({ message: "Unauthorized" });
  }

  req._user = user;
  next();
};

const verifyToken = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.email = decoded.email;
    next();
  });
};

export const authUser = {
  checkDuplicateEmail,
  verifyConfirmationToken,
  checkUserStatus,
};
