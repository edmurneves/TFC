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

export const handleGamesPointsEfficient = (victories: number, draws: number, losses: number) => {
  const totalGames = victories + draws + losses;
  const totalPoints = victories * 3 + draws * 1;
  const efficiency = Math.round((totalPoints * 10000) / (totalGames * 3)) / 100;
  return { totalGames, totalPoints, efficiency };
};
