import User from "../models/user.model.js";
export const isAuthenticated = async (req) => {
  const clerkUserId = req.auth.userId;
  if (!clerkId) {
    return {
     
      user: undefined,
    };
   
  }
  const user = await User.findOne({ clerkUserId });
  return {
    user,
  };
};
