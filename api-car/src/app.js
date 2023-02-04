// Importando os Módulos (dependências da aplicação)
const { PORT } = require('dotenv').config().parsed;
const express = require('express');
const app = express();

// Habilitando CORS
const cors = require('cors');
app.use(cors()) //CORS é usando para liberar acesso a aplicação de back-end

// Habilitadno a deserialização de JSON - Para o express entender JSON
app.use(express.json());

// Mapeamento das Rotas

const vehicles = require('../routes/vehicles');
app.use('/', vehicles)


// Iniciando a Aplicação
app.listen(PORT, () => {
  console.log(`Servidor Rodando na Porta ${PORT}...`);
}) 