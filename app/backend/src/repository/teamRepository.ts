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

  async getById(id: string): Promise<ITeam | null> {
    const team = await this.model.findOne({ where: { id } });
    return team;
  }

  async findTeam(homeTeam: number, awayTeam: number): Promise<ITeam[] | null> {
    const teams = await this.model.findAll({ where: { id: [homeTeam, awayTeam] } });
    return teams;
  }
}
