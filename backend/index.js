import express from 'express';
import userRouter from './routes/user.routes.js'
import postRouter from './routes/post.routes.js'
import commentRouter from "./routes/comment.routes.js";
import { connectDB } from './lib/connectDB.js';

const app = express();


//routes
app.use(express.json());
app.use("/users", userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);


app.listen(process.env.PORT, () => {
  console.log("Server started ");
  connectDB();
});