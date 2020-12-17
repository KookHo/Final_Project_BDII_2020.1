# Final_Project_BDII_2020.1

## Instruções de Execução

###### Intalação das dependências

Para executar o projeto, primeiramente é necessário executar o comando `npm install` ou `yarn install` em todos as pastas do projeto.

###### Configração dos serviços de Banco de Dados

Em seguida, deve-se iniciar ambos os serviços de Banco de Dados do monogoDB e do Neo4J. Para o mongoDB, basta iniciar o serviço.

Para o Neo4J, é necessário que se crie um novo banco de dados.No arquivo ***routes.js*** do diretório ***backendNeo/routes*** deve-se alterar a *porta* e a *senha* conforme a definida pelo serviço do Neo4J (porta ***bolt*** e a senha cadastrada ao criar o grafo).
