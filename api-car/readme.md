CRIAR UM SERVIÇO (API) PARA CADASTRAR VEICULOS

* REQUISITOS FUNCIONAIS:
    * CADASTRAR UM VEICULO
    * BUSCAR UM VEICULO POR ID
    * BUSCAR UM VEICULO POR NOME (DESAFIO)
    * ATUALIZAR OS DADOS DE UM VEICULO
    * EXCLUIR UM VEICULO

* BANCO DE DADOS:
    * USAR O BANCO DE DADOS DE PREFERENCIA (POSTGREE, SQLITE, ETC)
    * MODELO DO BANCO (EM ABERTO)

* PROJETO
    * CRIAR UM README, EXPLICANDO COMO SUBIR O PROJETO


Começando o projeto API-CAR
1º - Criar uma pasta onde será desenvolvido o projeto.
2º - Abrir o terminal e acessar a pasta do projeto.
    - verificar se temos o node e o npm instalado na maquina, usando o comando node -v e npm -v (irá apresentar a versão).
    - executar o comando: npm init -y (inicializa um projeto dentro do node, criando o arquivo "package.json").
3º - Criar uma nova pasta, chamada "src" dentro da pasta do projeto, que será o ponto de inicialização da aplicação.
4º - Dentro da pasta "src", criar o arquivo "app.js" que será o arquivo inicial da aplicação.
5º - Configurar, dentro do arquivo "package.json" um script para inicializar a aplicação ("start": "node src/app.js")
6º - Instalar o módulo "nodemon", como dependencia de desenvolvimento (comando: npm install nodemon --save-dev)
    Módulo nodemon serve para automatizar a execução do aplicativo, pois irá monitorar qualquer alteração nos arquivos e executar automaticamente.
7º - Configurar, dentro do arquivo "package.json" um script para inicializar a aplicação com o nodemon ("dev": "nodemon src/app.js").
8º - Criar dentro da pasta principal do projeto, o arquivo .gitignore e incluir nele a informação node_modules.
9º - Instalar o módulo "express" (comando: npm install express)
10º- Instalar o módulo "dotenv" (comando: npm install dotenv)
11º- Criar dentro da pasta principal do projeto, o arquivo .env e incluir nele a informação PORT=8080.


        
