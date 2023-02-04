
# Project API-CAR

API para cadastro de veículos.


## Documentação da API

## Instalação

```http
  npm install
```

## Execução

```http
  npm run dev
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

Exemplo:
```http
{
    "placa": "JBU3443",
    "marca": "Ford",
    "modelo": "Ka",
    "cor": "Branco"
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

Exemplo:
```http
  PATH /vehicles/ABC345
{
    "modelo": "Fusion",
    "cor": "Prata"
}

Será feita a busca do veículo com ID = ABC345 e será atualizado o modelo e cor.
```

#### Excluir um Veículo

```http

  DELETE /vehicles/:id

```
