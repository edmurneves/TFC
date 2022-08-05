import { IMatch } from '../interfaces';

export const handleGoalsFavorOwnBalance = (matches: IMatch[]) => {
  let goalsFavor = 0;
  let goalsOwn = 0;
  let goalsBalance = 0;
  matches.forEach((stats) => {
    goalsFavor += stats.homeTeamGoals;
    goalsOwn += stats.awayTeamGoals;
  });
  goalsBalance = goalsFavor - goalsOwn;

  return { goalsFavor, goalsOwn, goalsBalance };
};
