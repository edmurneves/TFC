import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as jwt from 'jsonwebtoken';

import { app } from '../app';
import Match from '../database/models/Match';


import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const matches = [
    {
      id: 1,
      homeTeam: 1,
      homeTeamGoals: 1,
      awayTeam: 2,
      awayTeamGoals: 2,
      inProgress: false,
      teamHome: {
        teamName: "Avaí/Kindermann"
      },
      teamAway: {
        teamName: "Bahia"
      },
    },
    {
      id: 2,
      homeTeam: 2,
      homeTeamGoals: 2,
      awayTeam: 1,
      awayTeamGoals: 1,
      inProgress: false,
      teamHome: {
        teamName: "Bahia"
      },
      teamAway: {
        teamName: "Avaí/Kindermann"
      },
    }
  ];


describe('Retona a lista de partidas', ()=> {
    before(() => {
        sinon.stub(Match, 'findAll').resolves(matches as unknown as Match[])
    });

    after(() => {
        (Match.findAll as sinon.SinonStub).restore();
    })

    it('Get de matches realizado com sucesso', async () => {
        const response = await chai.request(app).get('/matches');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.eql(matches);
    });
});

describe('Criação das partidas', () => {
    before(() => {
        sinon.stub(Match, 'create').resolves(matches[0] as unknown as Match);
    });

    after(() => {
        (Match.create as sinon.SinonStub).restore();
    })

    it('Criar a partida sem o token', async () => {
        const response = await chai.request(app).post('/matches').send(matches[0]);

        expect(response.status).to.be.equal(401);
        expect(response.body).to.be.eql({ message: 'Token must be a valid token' });
    });
});

describe('Atualização da partida', async () => {
    before(() => {
        sinon.stub(Match, 'update').resolves();
    });

    after(() => {
        (Match.update as sinon.SinonStub).restore();
    })

    it('Atualiza a partida', async () => {
        const response = await chai.request(app).patch('/matches/1')
        .send({ homeTeamGoals: 3, awayTeamGoals: 1 });

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.eql({ message: 'ok' });
    });
});

