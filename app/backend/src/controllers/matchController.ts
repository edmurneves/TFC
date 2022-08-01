import { NextFunction, Request, Response } from 'express';
import { IMatchService } from '../interfaces';

export default class MatchController {
  constructor(private service: IMatchService) {
    this.service = service;
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      let matchState = null;
      if (inProgress === 'false') matchState = false;
      if (inProgress === 'true') matchState = true;
      const matches = await this.service.getAll(matchState);
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }
}
