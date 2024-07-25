import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from './routes/posts.js'

const app = express();

app.use('/posts',postRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const Connection_URL = 'mongodb+srv://kuldeep:kuldeep123@cluster0.uz2vid3.mongodb.net/';
const PORT = process.env.PORT || 5000;

// Remove the deprecated options
mongoose.connect(Connection_URL)
  .then(() => app.listen(PORT, () => console.log("Server started on port " + PORT)))
  .catch(error => console.log("error=>:", error));
  