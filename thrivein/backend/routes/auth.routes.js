import { authUser } from "../middlewares/index.js";
import { controller } from "../controllers/auth.controller.js";

export default function (app) {
  app.post(
    "/api/auth/signup",
    [authUser.checkDuplicateEmail],
    controller.register
  );

  app.get(
    "/api/auth/confirm/:confirmationCode",
    [authUser.verifyConfirmationToken],
    controller.verifyUserEmail
  );
  app.post("/api/auth/signin", [authUser.checkUserStatus], controller.signin);

  app.post(
    "/api/auth/requestResetPassword",
    [authUser.checkUserStatus],
    controller.requestPasswordReset
  );
  app.post("/api/auth/resetPassword", controller.resetPassword);
}
