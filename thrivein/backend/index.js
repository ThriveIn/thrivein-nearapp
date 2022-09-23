import express, { urlencoded, json } from "express";
import db from "./models/index.js";
import cors from "cors";
import path from "path";
import dbConfig from "./config/db.config.js";

import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import helmet from "helmet";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(cors());
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.listen(3003, () => {
  console.log("app listening on port 3003");
});
app.use(express.static(path.join(__dirname + "/public")));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

db.mongoose
  .connect(
    `mongodb+srv://${dbConfig.USER}:${dbConfig.PWD}@${dbConfig.HOST}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

// Routes
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

authRoutes(app);
userRoutes(app);
