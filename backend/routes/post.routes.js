import express from "express";
import {
  createAPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:slug", getPostBySlug);

router.post("/", createAPost);
router.delete("/:id", deletePost);
export default router;
