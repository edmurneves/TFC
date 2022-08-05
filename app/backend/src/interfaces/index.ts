export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface IUserModel {
  findUser(email: string): Promise<IUser | null>;
  findRole(password: string): Promise<IUser | null>;
}

export interface IUserService {
  login(email: string, password: string): Promise<string | boolean>;
  validateLogin(authorization: string | undefined): Promise<IUser | null>;
}

export interface ITeamModel {
  getAll(): Promise<ITeam[] | null>;
  getById(id: string): Promise<ITeam | null>;
}

export interface ITeam {
  id?: number;
  teamName: string;
}

export interface ITeamService {
  getAll(): Promise<ITeam[] | null>;
  getById(id: string): Promise<ITeam | null>;
}

export interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatchModel {
  getAll(matches: boolean | null): Promise<IMatch[] | null>;
  create(match: IMatch): Promise<IMatch>;
  updateFinish(id: string): Promise<unknown>;
  updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
}

export interface IMatchService {
  getAll(matches: boolean | null): Promise<IMatch[] | null>;
  createMatch(match: IMatch): Promise<IMatch>;
  updateFinish(id: string): Promise<unknown>;
  updateMatch(homeTeamGoals: number, awayTeamGoals: number, id: string): Promise<unknown>;
}

export interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface ILeaderboardService {
  getAllHome(): Promise<ILeaderboard[] | boolean>;
}
