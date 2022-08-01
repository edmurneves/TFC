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
}

export interface IMatchService {
  getAll(matches: boolean | null): Promise<IMatch[] | null>;
}
