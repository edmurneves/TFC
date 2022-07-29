import { Request, Response, NextFunction } from 'express';

export const checkEmail = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export const checkPassword = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    next();
  } catch (error) {
    next(error);
  }
};
