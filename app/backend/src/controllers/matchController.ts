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

  async createMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await this.service.createMatch(req.body);
      return res.status(201).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async updateFinish(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.service.updateFinish(id);
      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  }

  async updateMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { homeTeamGoals, awayTeamGoals } = req.body;
      await this.service.updateMatch(homeTeamGoals, awayTeamGoals, id);
      return res.status(200).json({ message: 'ok' });
    } catch (error) {
      next(error);
    }
  }
}
