import express from 'express';
import userRouter from './routes/user.routes.js'
import postRouter from './routes/post.routes.js'
import commentRouter from "./routes/comment.routes.js";
import webHookRouter from './routes/webhook.routes.js'
import { connectDB } from './lib/connectDB.js';
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
const app = express();
app.use(clerkMiddleware());
app.use("/webhooks", webHookRouter);
app.use(cors(process.env.CLIENT_URL))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});
//routes
app.use(express.json());
app.use("/users", userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);

app.use((error,req,res,next)=>{
  res.status(error.status||500)
  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
})

app.listen(process.env.PORT, () => {
  console.log("Server started ");
  connectDB();
});