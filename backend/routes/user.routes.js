import express from 'express';
import { getUserSavedPosts, savePost } from '../controllers/user.controller.js';
import { requireAuth } from "@clerk/express";

const router = express.Router()
router.get('/saved',requireAuth({signInUrl:"/login"}),getUserSavedPosts)
router.patch("/save", requireAuth({ signInUrl: "/login" }), savePost);

export default router;