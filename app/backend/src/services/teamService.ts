import { ITeamService, ITeam, ITeamModel } from '../interfaces';

export default class Team implements ITeamService {
  constructor(private model: ITeamModel) {
    this.model = model;
  }

  async getAll(): Promise<ITeam[] | null> {
    const teams = await this.model.getAll();
    return teams;
  }

  async getById(id: string): Promise<ITeam | null> {
    const team = await this.model.getById(id);
    return team;
  }
}
