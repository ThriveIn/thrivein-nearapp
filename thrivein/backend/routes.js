import { register } from "./controller/Users.controller.js";

export default function (app) { 
    app.post("/api/users", register);
}

