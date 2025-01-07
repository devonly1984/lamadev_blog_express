import { isAuthenticated } from '../lib/isAuthenticated.js';
import User from '../models/user.model.js'
export const getUserSavedPosts = async (req, res) => {
  const {user} = await isAuthenticated(req);
  if (!user) {
    res.status(401).json("User is not logged in");
  }

    res.status(200).json(user.savedPosts);
};
export const savePost = async (req, res) => {
  const { user } = isAuthenticated(req);
  const postId = req.body.postId;
  if (!user) {
    res.status(401).json("User is not logged in");
  }
  const isSaved = user.savedPosts.some((p) => p === postId);
  if (!isSaved) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPosts: postId },
    });
  }
  setTimeout(() => {
    res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
  }, 3000);
}
