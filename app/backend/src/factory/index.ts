import UserRepository from '../repository/userRepository';
import UserService from '../services/userService';
import UserController from '../controllers/userController';

import TeamRepository from '../repository/teamRepository';
import TeamService from '../services/teamService';
import TeamController from '../controllers/teamController';

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
