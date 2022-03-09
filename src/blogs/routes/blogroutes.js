import express from "express";
// import mongoose from "mongoose";
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/blogcontrollers.js";


const router = express.Router();

router.post('/blogs', createBlog)
router.get('/blogs',getBlogs)
router.post('/blogs/:id', getBlog)
router.patch('/blogs/:id', updateBlog)
router.delete('/blogs/:id', deleteBlog)

export default router;
