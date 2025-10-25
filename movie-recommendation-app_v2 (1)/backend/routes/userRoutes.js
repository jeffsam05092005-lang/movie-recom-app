import express from "express";
import { protect } from "../middleware/auth.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

router.get("/movies", protect, async (req, res) => {
  const movies = [
    { _id: 1, title: "Inception", genre: "Sci-Fi" },
    { _id: 2, title: "Interstellar", genre: "Sci-Fi" },
    { _id: 3, title: "The Dark Knight", genre: "Action" }
  ];
  res.json(movies);
});

export default router;