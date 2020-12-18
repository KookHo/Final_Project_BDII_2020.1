# Final_Project_BDII_2020.1

## Descrição

Projeto desenvolvido como um sistema de recomendações de Filmes. Possio as funcionalidades de:

- Login e Cadastro de Usuário
- Curtir algum filme
- Recomendar filmes baseados nos filmes curtidos
- Descurtir filmes curtidos

Para o desenvolvimento do backend da aplicação, o mesmo foi divido em três partes, uma para cada banco de dados utilizado:
1. SQLite: Utilizado para guardar informações de login de usuários (nome e senha)
2. MongoDB: Utilizado para armazenar os dados dos filmes
3. Neo4J: Utilizado para realizar a função de recomendação

Para o desenvolvimento da interface Web, foi utilizada a biblioteca ReactJS do JavaScript em conjunto com o TypeScript

## Instruções de Execução


#### Intalação das dependências

Para executar o projeto, primeiramente é necessário executar o comando `npm install` ou `yarn install` em todos as pastas do projeto.


#### Configração dos serviços de Banco de Dados

Em seguida, deve-se iniciar ambos os serviços de Banco de Dados do monogoDB e do Neo4J. Para o mongoDB, basta iniciar o serviço.

Para o Neo4J, é necessário que se crie um novo banco de dados. No arquivo ***routes.js*** do diretório ***backendNeo/routes*** no trecho de código: 
```
const driver = new neo4j.driver("neo4j://localhost:<porta>", neo4j.auth.basic("neo4j", <senha>)); //("usuario", "senha")
```
Deve-se alterar a os campos ***porta*** e ***senha*** conforme a definida pelo serviço do Neo4J (porta ***bolt*** e a senha cadastrada ao criar o grafo).


#### Inicialização dos servidores

Após iniciar os banco de dados, em cada diretório raiz dos backends deve-se executar o comando `yarn dev`.


#### Inicialização da Aplicação

Após todos os passos anteriores, dirija-se ao diretório ***web*** e execute o comando `npm start` para iniciar a aplicação. Em seguida, basta visitar o site ***localhost:3000*** para utilizar a aplicação.

## Funcionamento

A tela inicial será a de login, onde é possível cadastrar usuários e logar na aplicação.
Após o login, o usuário será levado ao Dashboard, o qual contém as opções para curtir um filme, receber recomendações e visualizar os filmes curtidos.

Na parte de curtir um filme, o usuário só precisa preencher os campos corretamente e conofirmar. Caso o filme não exista na base de dados ele será criado.

Na parte de recomendações, o usuário receberá nomes de filmes recomendados baseados nos filmes que ele curtiu. Caso ele não tenha curtido nenhum filme, ele receberá commo recomendação os filmes mais curtidos.

Por fim, na parte de visualização de filmes curtidos, o usuário poderá ver quais filmes curtiu e, se desejar, removê-los da sua likelist.


## OBS.:

- Caso ocorra algum erro de banco de dados referente ao serviço SQLite, é possível que as tabelas não tenham sido criadas. Para resolver este erro, basta se dirigir ao diretório ***backendNeo*** e executar o comando `yarn typeorm migration:run` duas vezes.
- É recomendado que a aplicação seja aberta no navegador Google Chrome, pois algumas configurações CSSs não são suportadas em outros navegadores


###### Agradecimentos especiais

- Markus Kaul, pelo apoio logístico e emocional
- Miller Raycell, pelo apoio dev
- Tarliso Sander, pelo apoio emocional e dev
- Josemar Rocha, pelo apoio logístico e emocional
- Luigi Muller, pelo apoio emocional
- Matheus Fellype, pelo apoio logístico e emocional
