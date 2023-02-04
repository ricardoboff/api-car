// Conectando Bando de Dados
const path = require('path').resolve('infra/banco.db');
const { Database } = require('sqlite3');

module.exports = new Database(path);