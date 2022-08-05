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

export const handleVictoryDrawLoses = (matches: IMatch[]) => {
  let totalVictories = 0;
  let totalDraws = 0;
  let totalLosses = 0;
  matches.forEach((stats) => {
    if (stats.homeTeamGoals - stats.awayTeamGoals > 0) totalVictories += 1;
    else if (stats.homeTeamGoals - stats.awayTeamGoals < 0) totalLosses += 1;
    else totalDraws += 1;
  });

  return { totalVictories, totalDraws, totalLosses };
};
