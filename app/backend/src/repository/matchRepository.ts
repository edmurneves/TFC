import Model from '../database/models/Match';
import { IMatchModel, IMatch } from '../interfaces';
import teamModel from '../database/models/Team';

export default class MatchRepository implements IMatchModel {
  constructor(private model = Model) {
    this.model = model;
  }

  async getAll(matches: boolean | null): Promise<IMatch[] | null> {
    let allMatches: unknown;
    if (matches === null) {
      allMatches = await this.model.findAll({ include: [
        { model: teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
      ] });
    } else {
      allMatches = await this.model.findAll({ where: { inProgress: matches },
        include: [
          { model: teamModel, as: 'teamHome', attributes: { exclude: ['id'] } },
          { model: teamModel, as: 'teamAway', attributes: { exclude: ['id'] } },
        ] });
    }
    return allMatches as IMatch[];
  }

  async create(match: IMatch): Promise<IMatch> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const matchCreate = await this.model.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return matchCreate;
  }
}
