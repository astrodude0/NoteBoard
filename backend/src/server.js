import express from "express";
import noteRoute from "./routes/noteRoute.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;

dotenv.config({ path: "../../.env" });

app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRoute);

connectDB().then(() => app.listen(port, () => console.log("listening")));
