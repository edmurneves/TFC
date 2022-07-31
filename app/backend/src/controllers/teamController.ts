import { NextFunction, Request, Response } from 'express';
import { ITeamService } from '../interfaces';

export default class TeamController {
  constructor(private service: ITeamService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.service.getAll();
      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
