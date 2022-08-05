import { ILeaderboard,
  ILeaderboardService,
  IMatchModel,
  ITeamModel,
  ITeam,
  IMatch,
} from '../interfaces';

import { handleGoalsFavorOwnBalance,
  handleVictoryDrawLoses,
  handleGamesPointsEfficient } from '../utils/businessRules';

export default class LeaderboardService implements ILeaderboardService {
  constructor(private matchModel: IMatchModel, private teamModel: ITeamModel) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  // Ordenação baseada no método sort() descrito no link abaixo
  // https://www.javascripttutorial.net/javascript-array-sort/

  static sortBoard(board: ILeaderboard[]): ILeaderboard[] {
    const boarder = board.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      if (a.goalsOwn < b.goalsOwn) return -1;
      if (a.goalsOwn > b.goalsOwn) return 1;
      return 0;
    });
    return boarder;
  }

  static leaderBoardHome(team: ITeam, myMatches: IMatch[]) {
    const { goalsFavor, goalsOwn, goalsBalance } = handleGoalsFavorOwnBalance(myMatches);
    const { totalVictories, totalDraws, totalLosses } = handleVictoryDrawLoses(myMatches);
    const { totalGames, totalPoints, efficiency } = handleGamesPointsEfficient(
      totalVictories,
      totalDraws,
      totalLosses,
    );
    const name = team.teamName;
    return { name,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor,
      goalsOwn,
      goalsBalance,
      efficiency };
  }

  async getAllHome(): Promise<ILeaderboard[] | boolean> {
    const matches = await this.matchModel.getAll(false);
    const teams = await this.teamModel.getAll();

    if (!matches || !teams) {
      return false;
    }

    const leaderBoard = teams.map((team) => {
      const matchesByTime = matches.filter((match) => match.homeTeam === team.id);

      return LeaderboardService.leaderBoardHome(team, matchesByTime);
    });

    const leaderBoards = LeaderboardService.sortBoard(leaderBoard);
    return leaderBoards;
  }
}
