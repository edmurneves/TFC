import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Team from '../database/models/Team';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

const teams = [
    {
      id: 1,
      teamName: "Avaí/Kindermann"
    },
    {
      id: 2,
      teamName: "Bahia"
    }
  ];

describe('Testes dos times', () => {
    before(() => {
        sinon.stub(Team, 'findAll').resolves(teams as unknown as Team[])
    });

    after(() => {
        (Team.findAll as sinon.SinonStub).restore();
    })

    it('Busca realizada com sucesso', async () => {
        const response = await chai.request(app).get('/teams');

        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.eql(teams)
    });
});

describe('Busca por um time', () => {
    before(() => {
      sinon.stub(Team, 'findOne')
        .resolves(teams[0] as unknown as Team)
    });
  
    after(() => {
      (Team.findOne as sinon.SinonStub)
        .restore();
    })
  
    it('Traz um time pelo id', async () => {
      const response = await chai.request(app).get('/teams/5');
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.eql(teams[0])
    });
  });