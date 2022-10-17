import config from "../config/auth.config.js";
import sendEmail from "../config/mail.config.js";
import db from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { tokenService, userService } from "../services/index.js";
import crypto from "crypto";

const User = db.user;
const Token = db.token;

const register = (req, res) => {
  var token = jwt.sign({ email: req.body.email }, config.verifySecretKey, {
    expiresIn: 86400, // 24 hours
  });
  const { fullName, email, password } = req.body;
  const user = new User({
    fullName,
    email,
    password: bcrypt.hashSync(password, 8),
    confirmationCode: token,
  });
  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({
      message: "User was registered successfully! Please check your email",
    });
    const content = {
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
              <h2>Hello ${user.fullName}</h2>
              <p>Thank you for signing up. Please confirm your email by clicking on the following link</p>
              <a href=http://localhost:3003/confirm/${user.confirmationCode}> Click here</a>
              </div>`,
    };
    sendEmail(user.fullName, user.email, content);
  });
};

const verifyUserEmail = (req, res) => {
  const user = req._user;
  user.status = "Active";
  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "Email verified" });
    }
  });
};

const signin = (req, res) => {
  const user = req._user;
  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "We couldn't find an account with this email. Please try again.",
    });
  }
  var token = jwt.sign({ email: user.email }, config.secret, {
    expiresIn: 86400, // 24 hours
  });
  res.status(200).send({
    id: user._id,
    email: user.email,
    fullName: user.fullName,
    jobProfile: user.jobProfile,
    location: user.location,
    bio: user.bio,
    profileImage: user.profileImage,
    accessToken: token,
  });
};

const requestPasswordReset = async (req, res) => {
  const user = req._user;
  const token = await tokenService.getTokenByUserId(user._id);
  if (token) {
    await tokenService.deleteToken(token);
  }
  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = bcrypt.hashSync(resetToken, 8);

  const newToken = new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  });
  newToken.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({
      message: "Reset link sent to your mail",
    });
    const content = {
      subject: "Please confirm your account",
      html: `<h1>Password Reset Request</h1>
              <h2>Hello ${user.fullName}</h2>
              <p>You requested to reset your password.</p>
              <p> Please, click the link below to reset your password</p>
              <a href=http://localhost:3003/passwordReset?token=${resetToken}&id=${user._id.toString()}> Click here to reset password!</a>
              </div>`,
    };
    sendEmail(user.fullName, user.email, content);
  });
};

const resetPassword = async (req, res) => {
  const { userId, token, password } = req.body;
  const passwordResetToken = await tokenService.getTokenByUserId(userId);

  if (!passwordResetToken) {
    res
      .status(404)
      .send({ message: "Invalid or expired password reset token" });
    return;
  }

  const isValid = bcrypt.compareSync(token, passwordResetToken.token);

  if (!isValid) {
    res
      .status(404)
      .send({ message: "Invalid or expired password reset token" });
    return;
  }

  const hash = bcrypt.hashSync(password, 8);

  await User.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );

  const user = await userService.getUserFromId(userId);
  res.send({
    message: "Password Reset Successfully",
  });
  const content = {
    subject: "Password Reset Successfully",
    html: `<h1>Password Reset Successfully</h1>
            <h2>Hello ${user.fullName}</h2>
            <p>Your password has been changed successfully</p>`,
  };

  sendEmail(user.fullName, user.email, content);
  await passwordResetToken.deleteOne();
};

export const controller = {
  register,
  verifyUserEmail,
  signin,
  requestPasswordReset,
  resetPassword,
};
