### Observação

Este repositório contem o **Projeto Trybe Futebol Clube** que reúne o aprendizado desenvolvido por _[Edmur Parizoto das Neves](https://www.linkedin.com/in/edmurneves//)_ enquanto estudante da [Trybe](https://www.betrybe.com/) :rocket:
**GitHub [Trybe](https://github.com/tryber)**.

# Project Trybe Futebol Clube

#### Habilidades que foram exigidas:

  - Desenvolvimento de API em Nods.js/TypeScript;
  - Utilizar Express;
  - Utilizar o Sequelize;
  - Operações basicas no bando de dados: Create, Read, Update e Delete;
  - Utilizar o Docker;
  - Utilizar SQL;
  - Utilizar o MySql;
  - Utilizar JsonWebToken;
  - Clean Code;
  - Utilizar conceitos da Programação Orientada a Objetos;
  - SOLID;
  - Arquitetura API Rest e MVC.

---

## Apresentação do Projeto


### Introdução

O Projeto Trybe Futebol Clube é uma aplicação fullStack onde o objetivo é imitar uma página de pontuação de um campeonato brasileiro de futebol. A aplicação possui um banco de dados que armazena todos os resultados das partidas e os usuários cadastrados, onde também é possível o cadastro de novas partidas e a atualização dos resultados das mesmas. O Back-end da aplicação foi desenvolvido com TypeScript orientado a objeto seguindo os princípios SOLID. Nas camadas da arquitetura do Back-end foram diluídas todas as regras de negócio da aplicação, tais como o tratamento de dados das partidas finalizadas para gerar estatísticas do time, suas vitórias, derrotas, gols sofridos, gols marcados e seu aproveitamento na competição. O Front-end é feito em React, recebe e manda as requisições ao Back-end. E, por fim, para que a aplicação funcione em conjunto com diversas tecnologias, foi utilizado o docker-compose, dividindo a aplicação em containers.


### Inicialização

 **OBS: necessário ter docker-compose na versão 1.29 pra cima.**

Realize o clone do projeto em sua máquina

No terminal:
 - git clone git@github.com:willianbatist/project-TypeScrypt-TFC.git
 - cd project-TypeScrypt-TFC/
 - npm run compose:up:dev
 - docker start db app_backend app_frontend

depois dessa configuração inicial, aplicação front-end estará disponível em:
http://localhost:3000/matches

depois dessa configuração inicial, aplicação back-end estará disponível em:
GET’s do back-end:
Matches das partidas
http://localhost:3001/matches

Times:
http://localhost:3001/teams

**Observação é necessário a utilização de variáveis de ambiente, pelo **.env**.**


### Desafios e Aprendizados

Este projeto foi realizado em TDD, colocando em prática tudo que aprendi até o presente momento no desenvolvimento de back-end. O maior desafio e também maior aprendizagem do projeto foi a realização de testes antes de criar as funcionalidades. É desafiador testar o que ainda não está criado, mas com o tempo fui entendendo a importância para a qualidade do código, ficou mais íntegro, seguro e com retorno previsível.

  
---
### Trybe

_"A Trybe é uma escola do futuro para qualquer pessoa que queira melhorar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa só paga quando conseguir um bom trabalho."_
