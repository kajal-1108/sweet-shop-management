// src/controllers/authController.ts
import { Request, Response } from "express";
import User from "../models/users";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, JWT_SECRET, { expiresIn: "1h" });
};

// Register new user
export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    // validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ username, email, password, role });
    await user.save();

    const token = generateToken(user._id.toString(), user.role);
    res.status(201).json({ token, user: { id: user._id, username, email, role } });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login user
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

   
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id.toString(), user.role);
    res.json({
      token,
      user: { id: user._id, username: user.username, email, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Logout user
export const logout = async (req: Request, res: Response) => {
  try {
   
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
