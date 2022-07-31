import Model from '../database/models/Team';
import { ITeamModel, ITeam } from '../interfaces';

export default class TeamRepository implements ITeamModel {
  constructor(private model = Model) {
    this.model = model;
  }

  async getAll(): Promise<ITeam[] | null> {
    const teams = await this.model.findAll();
    return teams;
  }
}
