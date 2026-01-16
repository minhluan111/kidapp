import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { supabase } from "./supabaseClient.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/words", async (req, res) => {
  const { data, error } = await supabase.from("words").select("*");
  if (error) return res.status(500).json(error);
  res.json(data);
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
