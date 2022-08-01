import { IMatch, IMatchModel, IMatchService } from '../interfaces';

export default class MatchService implements IMatchService {
  constructor(private model: IMatchModel) {
    this.model = model;
  }

  async getAll(matches: boolean | null): Promise<IMatch[] | null> {
    const allMatches = await this.model.getAll(matches);
    return allMatches;
  }
}
