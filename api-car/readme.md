
# Project API-CAR

Projeto do Modulo Programação Web III.

Construção de uma API para Cadastro de Veículos.

Aluno: Ricardo Luiz Boff

Professor: Leonardo Souza


## Documentação da API

## Rodando o Projeto

Instale os pacotes do arquivo package.json

## Instalação 

```http
  npm install
```

## Execução

```http
  npm start
```


## API Reference


#### Cadastrar um Veículo

```http
  POST /vehicles
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `placa` | `string` | **Obrigatório**.|
| `marca` | `string` | **Obrigatório**. |
| `modelo` | `string` | **Obrigatório**. |
| `cor` | `string` | **Obrigatório**. |
| `ano` | `string` | **Obrigatório**. |

Exemplo:
```http
{
    "placa": "JBU3443",
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Branco",
    "ano": "2010"
}
```


#### Buscar todos os Veículos

```http

  GET /vehicles

  http://localhost:8080/vehicles
  
```

#### Buscar um Veículo pelo ID

```http

  GET /vehicles/:id

  http://localhost:8080/vehicles/:id
```

#### Buscar um Veículo pelo Modelo

```http

  GET /vehicles/?modelo={modelo}

  http://localhost:8080/vehicles/?modelo={modelo}
```

#### Atualizar os Dados de um Veículo

```http

  PATH /vehicles/:id
  ```

  
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `placa` | `string` | **Não Obrigatório**.|
| `marca` | `string` | **Não Obrigatório**. |
| `modelo` | `string` | **Não Obrigatório**. |
| `cor` | `string` | **Não Obrigatório**. |
| `ano` | `string` | **Não Obrigatório**. |

Exemplo:
```http
  PATH /vehicles/01GRF3MFE9Q5WYJPSD6BCP67EB
{
    "modelo": "Fusion",
    "cor": "Prata"
}

Será feita a busca do veículo com ID = 01GRF3MFE9Q5WYJPSD6BCP67EB e será atualizado o modelo e cor.
```

#### Excluir um Veículo

```http

  DELETE /vehicles/:id

```


## Dependências de arquivos e configurações

  - body-parser;
  - cors;
  - dotenv;
  - express;
  - sqlite3;
  - ulid;
