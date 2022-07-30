import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

  const login = {
    email: 'user@user.com',
    password: 'secret_user'
  }

  const password = {   
    password: 'secret_user'
  }

  const email = {   
    email: 'user@user.com'
  }
  
  const userMock = { 
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
  }

describe('Teste de login', () => {
    before(() => {
        sinon.stub(User, 'findOne').resolves(userMock as User)
    });

    after(() => {
        sinon.stub(User, 'findOne').restore()
    });

    it('Login realizado com sucesso', async () => {
        const response = await chai.request(app).post('/login').send(login);

        expect(response.status).to.be.equal(200);
        expect(response.body).have.property('token');
        
    });

    it('Login sem email', async () => {
        const response = await chai.request(app).post('/login').send(password);

        expect(response.status).to.be.equal(400);
        expect(response.body).to.be.eql({ message: 'All fields must be filled'});
    });

    it('Login sem password', async () => {
        const response = await chai.request(app).post('/login').send(email);

        expect(response.status).to.be.equal(400);
        expect(response.body).to.be.eql({ message: 'All fields must be filled'});
    });

});