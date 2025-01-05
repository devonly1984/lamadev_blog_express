import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostBySlug,
  uploadAuth,
} from "../controllers/post.controller.js";
import {requireAuth} from '@clerk/express'


const router = express.Router();


router.get("/upload-auth", uploadAuth);
router.get("/", getAllPosts);
router.get("/:slug", getPostBySlug);

router.post("/", requireAuth({ signInUrl: "/login" }), createPost);
router.delete("/:id", requireAuth({ signInUrl: "/login" }), deletePost);
export default router;
