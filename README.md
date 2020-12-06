<h1 align="center">Welcome to Simple Adonis CRUD👋</h1>
<p>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> 🍬. Simple CRUD made with AdonisJS to pratice

### 🏠 [Click here to see project in production](https://adonis-simple-crud.herokuapp.com/posts)

## Install

```sh
git clone https://github.com/peguimasid/Adonis-Crud.git
```

## Usage

```sh
yarn
```


Create a .env:
 ```sh
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=YFfroMuy52FthjCknWB0rkO9aIfPbext
CACHE_VIEWS=false

DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=docker
PG_DB_NAME=adonis_pg

 ```

 Create Docker Database (You need to have docker intalled in your PC to run):

 ```sh
  docker run --name adonis_pg -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
 ```

 Run this:

 ```sh
  node ace invoke @adonisjs/lucid

  node ace build

  node ace migration:run

  node ace serve --watch
 ```

## Author

👤 **Guilhermo Masid**

* Github: [@peguimasid](https://github.com/peguimasid)
* LinkedIn: [@Guilhermo Masid](https://www.linkedin.com/in/guilhermo-masid-494677b8/)

## Show your support

Give a ⭐️ if this project helped you!

***
