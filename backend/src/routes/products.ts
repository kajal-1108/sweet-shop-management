import { Router } from "express";

const router = Router();

// Example in-memory products
const products = [
  { id: 1, name: "Chocolate", price: 10 },
  { id: 2, name: "Candy", price: 5 }
];

// GET /products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
