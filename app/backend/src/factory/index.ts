import UserRepository from '../repository/userRepository';
import UserService from '../services/userService';
import UserController from '../controllers/userController';

import TeamRepository from '../repository/teamRepository';
import TeamService from '../services/teamService';
import TeamController from '../controllers/teamController';

import MatchRepository from '../repository/matchRepository';
import MatchService from '../services/matchService';
import MatchController from '../controllers/matchController';

import LeaderboardService from '../services/leaderboardService';
import LeaderboardController from '../controllers/leaderboardController';
// Utilizando o Pattern Factory

export const UserFactory = () => {
  const repository = new UserRepository();
  const service = new UserService(repository);
  const controller = new UserController(service);

  return controller;
};

export const TeamFactory = () => {
  const repository = new TeamRepository();
  const service = new TeamService(repository);
  const controller = new TeamController(service);

  return controller;
};

export const MatchFactory = () => {
  const repository = new MatchRepository();
  const service = new MatchService(repository);
  const controller = new MatchController(service);

  return controller;
};

export const LeaderboardFactory = () => {
  const matchRepository = new MatchRepository();
  const teamRepository = new TeamRepository();
  const service = new LeaderboardService(matchRepository, teamRepository);
  const controller = new LeaderboardController(service);

  return controller;
};
