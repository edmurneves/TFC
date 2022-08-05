import { Router } from 'express';
import { LeaderboardFactory } from '../factory';

const leaderboardRouter = Router();

leaderboardRouter.get('/leaderboard/home', (req, res, next) => {
  LeaderboardFactory().getAllHome(req, res, next);
});

export default leaderboardRouter;
