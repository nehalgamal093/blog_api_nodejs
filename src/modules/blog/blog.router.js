import express from 'express';
import * as BlogController from './blog.controller.js';
import { userAuth } from '../../middleware/auth.js';

const blogRouter = express.Router();

blogRouter.post('/',userAuth,BlogController.addBlog);
blogRouter.get('/',userAuth,BlogController.getAllBlogs)
blogRouter.put('/',userAuth,BlogController.updateBlog)
blogRouter.delete('/',BlogController.deleteBlog)
blogRouter.get('/:id',BlogController.getUserBlogs)
export default blogRouter;