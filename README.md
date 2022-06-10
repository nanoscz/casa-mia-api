# API Docs

Automate CasaMia via a simple and powerful API.

La API principal de CasaMia es una API [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) API. Therefore, documentation in this section assumes knowledge of REST concepts.

### Install
1. Clone project.
```shell
  git clone https://github.com/nanoscz/casa-mia-api.git
```
2. Install dependencies.
```shell
  npm install
```
3. Configure environment, create .env file in project root, take .env.example as guide.
```shell
  NODE_ENV=development
  PORT=5000
  DATABASE_URL='mysql://root@localhost:3306/casamia'
```
