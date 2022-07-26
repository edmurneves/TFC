# FROM node:16.14-alpine
# WORKDIR /app-backend
#  ...

FROM node:16-alpine

WORKDIR /backend

COPY package*.json ./

RUN install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
