import express from 'express';
import { signin, signup } from './user.controller.js';
import { validation } from '../../middleware/validation.js';
import { signInSchema, signUpSchema } from './user.validation.js';


const userRouter = express.Router();

userRouter.post('/signup',validation(signUpSchema),signup)
userRouter.post('/signin',validation(signInSchema),signin)

export default userRouter;