import express from "express";
import {
  createPost,
  deletePost,
  featurePost,
  getAllPosts,
  getPostBySlug,
  uploadAuth,
} from "../controllers/post.controller.js";
import {requireAuth} from '@clerk/express'
import { increaseVisit } from "../middleware/increaseVisit.js";


const router = express.Router();


router.get("/upload-auth", uploadAuth);
router.get("/", getAllPosts);
router.get("/:slug", increaseVisit, getPostBySlug);

router.post("/", requireAuth({ signInUrl: "/login" }), createPost);
router.delete("/:id", requireAuth({ signInUrl: "/login" }), deletePost);
router.patch("/feature", requireAuth({ signInUrl: "/login" }), featurePost);
export default router;
