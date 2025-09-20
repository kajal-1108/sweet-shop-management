// src/controllers/sweetsController.ts
import { Request, Response } from "express";
import { Types } from "mongoose";
import Sweet, { ISweet } from "../models/sweetModel"; // adjust path if needed

// GET /api/sweets/search?name=...&category=...&minPrice=...&maxPrice=...
export const searchSweets = async (req: Request, res: Response) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const filter: any = {};

    if (name) filter.name = { $regex: String(name), $options: "i" }; // case-insensitive partial match
    if (category) filter.category = String(category);

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice && !Number.isNaN(Number(minPrice))) filter.price.$gte = Number(minPrice);
      if (maxPrice && !Number.isNaN(Number(maxPrice))) filter.price.$lte = Number(maxPrice);
      // if both were invalid numbers, price will be an empty object — but Mongoose ignores empty objects in queries
    }

    const sweets: ISweet[] = await Sweet.find(filter);
    return res.json(sweets);
  } catch (err: any) {
    return res.status(500).json({ message: err?.message ?? "Server error" });
  }
};

// PUT /api/sweets/:id  (admin only — change if you want other roles)
export const updateSweet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid sweet id" });

    // require admin - adjust if you want other roles to update
    if (req.user?.role !== "admin") return res.status(403).json({ message: "Not allowed" });

    // Only allow certain fields to be updated
    const allowed = ["name", "category", "price", "quantity", "description", "imageUrl"];
    const updates: any = {};
    for (const k of allowed) {
      if (req.body[k] !== undefined) updates[k] = req.body[k];
    }

    // basic validation
    if (updates.price !== undefined && Number(updates.price) < 0)
      return res.status(400).json({ message: "Price must be >= 0" });
    if (updates.quantity !== undefined && Number(updates.quantity) < 0)
      return res.status(400).json({ message: "Quantity must be >= 0" });

    const updated = await Sweet.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: "Sweet not found" });

    return res.json(updated);
  } catch (err: any) {
    return res.status(500).json({ message: err?.message ?? "Server error" });
  }
};

// DELETE /api/sweets/:id  (admin only)
export const deleteSweet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid sweet id" });

    if (req.user?.role !== "admin") return res.status(403).json({ message: "Not allowed" });

    const deleted = await Sweet.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Sweet not found" });

    return res.json({ message: "Sweet deleted", sweet: deleted });
  } catch (err: any) {
    return res.status(500).json({ message: err?.message ?? "Server error" });
  }
};
