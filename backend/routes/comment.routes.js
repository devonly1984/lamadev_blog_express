import express from 'express';
import { addComment, deleteComment, getPostComments } from '../controllers/comment.controller.js';
import {requireAuth} from '@clerk/express'

const router = express.Router()
router.get('/:postId',getPostComments);
router.post("/:postId", requireAuth({ signInUrl: "/login" }), addComment);
router.delete("/:id", deleteComment);

export default router;