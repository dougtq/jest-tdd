module.exports = {
  "username": "postgres",
  "password": "docker",
  "database": "auth",
  "host": "localhost",
  "port": "15432",
  "dialect": "postgres",
  "dialectOptions": {
    "ssl": false
  },
  "operatorsAliases": false,
  "logging": true,
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true
  }
}
