import { Router } from 'express';
import checkJWT from '../middlewares/checkJWT';
import checkMatch from '../middlewares/checkMatch';
import { MatchFactory } from '../factory';

const matchRouter = Router();

matchRouter.get('/matches', (req, res, next) => {
  MatchFactory().getAll(req, res, next);
});

matchRouter.post('/matches', checkJWT, checkMatch, (req, res, next) => {
  MatchFactory().createMatch(req, res, next);
});

matchRouter.patch('/matches/:id/finish', (req, res, next) => {
  MatchFactory().updateFinish(req, res, next);
});

matchRouter.patch('/matches/:id', (req, res, next) => {
  MatchFactory().updateMatch(req, res, next);
});

export default matchRouter;
