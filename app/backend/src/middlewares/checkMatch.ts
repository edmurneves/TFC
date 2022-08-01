import { NextFunction, Request, Response } from 'express';
import TeamRepository from '../repository/teamRepository';

const teams = new TeamRepository();

const checkMatch = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const checkTeams = await teams.findTeam(homeTeam, awayTeam);
  if (homeTeam === awayTeam) {
    return res.status(401)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  if (checkTeams?.length !== 2) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  next();
};

export default checkMatch;
