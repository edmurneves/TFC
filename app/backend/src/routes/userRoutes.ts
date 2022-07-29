import { Router } from 'express';
import { UserFactory } from '../factory';

const userRouter = Router();

userRouter.post('/login', (req, res, next) => {
  UserFactory().login(req, res, next);
});

export default userRouter;
