import express from "express";
import Sweet from "../models/sweetModel";
import { protect } from "../middleware/auth";

const router = express.Router();

// PUBLIC ROUTES - No authentication required for browsing

// READ ALL (Public - for browsing)
router.get("/", async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// SEARCH sweets (Public - for browsing)
router.get("/search", async (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    const filter: any = {};

    if (name) {
      filter.name = { $regex: String(name), $options: "i" }; // case-insensitive
    }
    if (category) {
      filter.category = String(category);
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice && !isNaN(Number(minPrice))) {
        filter.price.$gte = Number(minPrice);
      }
      if (maxPrice && !isNaN(Number(maxPrice))) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    const sweets = await Sweet.find(filter);
    res.json(sweets);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// READ ONE (Public - for viewing details)
router.get("/:id", async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });
  res.json(sweet);
});

// PROTECTED ROUTES - Authentication required

// CREATE Sweet (admin only)
router.post("/", protect, async (req, res) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Not allowed" });

  const { name, price, quantity, description, category } = req.body;
  try {
    const sweet = await Sweet.create({
      name,
      price,
      quantity,
      description,
      category,
    });
    res.status(201).json(sweet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", protect, async (req, res) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Not allowed" });

  try {
    const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!sweet) return res.status(404).json({ message: "Sweet not found" });
    res.json(sweet);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Not allowed" });

  const sweet = await Sweet.findByIdAndDelete(req.params.id);
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });
  res.json({ message: "Sweet deleted" });
});

// PURCHASE Sweet
router.post("/:id/purchase", protect, async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }
    if (sweet.quantity <= 0) {
      return res.status(400).json({ message: "Sweet is out of stock" });
    }
    sweet.quantity -= 1;
    await sweet.save();
    res.json(sweet);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// RESTOCK Sweet (admin only)
router.post("/:id/restock", protect, async (req, res) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Not allowed" });
  }
  try {
    const { quantity } = req.body;
    if (!quantity || isNaN(Number(quantity))) {
      return res.status(400).json({ message: "Invalid quantity provided" });
    }

    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }
    sweet.quantity += Number(quantity);
    await sweet.save();
    res.json(sweet);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
