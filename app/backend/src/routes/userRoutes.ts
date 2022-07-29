import { Router } from 'express';
import { checkEmail, checkPassword } from '../middlewares/checkLogin';
import { UserFactory } from '../factory';

const userRouter = Router();

userRouter.post('/login', checkEmail, checkPassword, (req, res, next) => {
  UserFactory().login(req, res, next);
});

export default userRouter;
