/// <reference types="./types/express" />


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/products";
import authRoutes from "./routes/auth";
import { protect } from "./middleware/auth"; // <-- import protect middleware

import sweetRoutes from "./routes/sweets";




dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/products", productsRouter);
app.use("/api/sweets", sweetRoutes);


// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Temporary protected route for testing
app.get("/api/protected", protect, (req, res) => {
  res.json({ ok: true, user: req.user });
});

export default app;
