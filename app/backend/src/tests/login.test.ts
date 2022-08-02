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

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoyLCJ1c2VybmFtZSI6IlVzZXIiLCJyb2xlIjoidXNlciIsImVtYWlsIjoidXNlckB1c2VyLmNvbSIsInBhc3N3b3JkIjoiJDJhJDA4JFk4QWJpOGpYdnNYeXFtLnJtcDBCLnVRQkE1cVV6N1Q2R2hsZy9DdlZyL2dMeFlqNVVBWlZPIn0sImlhdCI6MTY1NzY1MjQ5OH0.UMEAZNmlMqHmvLDTrMz8dfxm1WrFfl07vn_hs2EI0_c'



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

    it('Testa a rota /login/validate caso sucesso retonar um objeto com a propriedade role.', async () => {
      const response = await chai.request(app).get('/login/validate').set({ "Authorization": token });
      // console.log(response.status);
      // console.log(response.body);
      expect(response.status).to.be.equal(200);
      expect(response.body).have.property('role');
    });

});