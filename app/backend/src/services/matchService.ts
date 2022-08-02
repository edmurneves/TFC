import { IMatch, IMatchModel, IMatchService } from '../interfaces';

export default class MatchService implements IMatchService {
  constructor(private model: IMatchModel) {
    this.model = model;
  }

  async getAll(matches: boolean | null): Promise<IMatch[] | null> {
    const allMatches = await this.model.getAll(matches);
    return allMatches;
  }

  async createMatch(match: IMatch): Promise<IMatch> {
    const matches = await this.model.create(match);
    return matches;
  }

  async updateFinish(id: string): Promise<unknown> {
    const match = await this.model.updateFinish(id);
    return match;
  }

  async updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown> {
    const match = await this.model.updateMatch(homeTeamGoals, awayTeamGoals, id);
    return match;
  }
}
