import express from "express";
import noteRoute from "./routes/noteRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;
const __dirname = path.resolve();

dotenv.config({ path: "../.env" });

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}

app.use(express.json());
app.use("/api/notes", noteRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/*w", (req, res) =>
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
  );
}

connectDB().then(() => app.listen(port, () => console.log("listening")));
