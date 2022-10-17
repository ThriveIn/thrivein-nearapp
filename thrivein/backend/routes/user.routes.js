import { authUser } from "../middlewares/index.js";
import { controller } from "../controllers/user.controller.js";

export default function (app) {
  app.post(
    "/api/user/updateProfile",
    [authUser.verifyToken, authUser.checkUserStatus],
    controller.updateUserProfile
  );
}
