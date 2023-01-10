<p align="center">
  <a href="https://graphql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" width="200" alt="GraphQL Logo" /></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href="https://www.postgresql.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" width="200" alt="PostgreSQL Logo" /></a>
</p>

  <p align="center">A sample application using GraphQL + NestJS + PostgreSQL.</p>
    <p align="center">
    
## 📝 Description

This is a example of a graphQL API with NestJS and MongoDB. With this code you'll be able to make QUERYs and MUTATIONs operations.

## 💻 What do you need to make it work?

  - [Node](https://nodejs.org/en/) - JS runtime environment
  - [NestJS](https://nestjs.com/) - NodeJS Framework
  - [VSCode](https://code.visualstudio.com/) - IDE
  - [Docker](https://www.docker.com/) - Containers solution
  - [Postman](https://www.postman.com/) - API Testing (optional)

## Installation

```bash
$ npm install
```

## 🚀 Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🎬 Playing

#### Mutation example

```graphql
mutation CreateCustomer {
  createCustomer (
    name: "Jane Doe"
    email: "janedoe@notexist.com"
    phone: "+555199999-9999"
    address: "rua xpto, número 666. Bairro Proibido"
  ) {
    name
    id
  }
}
```


#### Query example

```graphql
query {
  customers {
    name
    phone
  }
}
```

## 🐛 Problem?
If you find trouble to have some fun with this code feel confortable to open a new `ISSUE`.

But if you find it and know how to solve, please open a `PULL REQUEST`.

