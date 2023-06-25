import express from 'express';
import * as BlogController from './blog.controller.js';
import { userAuth } from '../../middleware/auth.js';
import { addBlogSchema } from './blog.validation.js';
import { validation } from '../../middleware/validation.js';
const blogRouter = express.Router();

blogRouter.post('/',userAuth,validation(addBlogSchema),BlogController.addBlog);
blogRouter.get('/',userAuth,BlogController.getAllBlogs)
blogRouter.put('/',userAuth,BlogController.updateBlog)
blogRouter.delete('/',BlogController.deleteBlog)
blogRouter.get('/:id',BlogController.getUserBlogs)
export default blogRouter;