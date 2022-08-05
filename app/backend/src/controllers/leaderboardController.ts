import { NextFunction, Request, Response } from 'express';
import { ILeaderboardService } from '../interfaces/index';

export default class LeaderboardService {
  constructor(private service: ILeaderboardService) {
    this.service = service;
  }

  async getAllHome(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await this.service.getAllHome();
      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }
}
