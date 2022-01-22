# Movies

## Uma interface de anotações para acompanhar os filmes visto

### Setup
Utilizei do [vídeo](https://www.youtube.com/watch?v=rCeGfFk-uCk) da [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg) para montar o setup de desenvolvimento da aplicação utilizando:
 - [TypeScript](https://www.typescriptlang.org/): para melhorar a qualidade do desenvolvimento em javascript
 - [Eslint](https://eslint.org/): para manter o código com menor défict técnico possível
 - [Jest](https://jestjs.io/pt-BR/): para utilizar da técnica do [TDD](https://www.techlise.com.br/blog/tudo-o-que-voce-precisa-saber-sobre-tdd/#:~:text=TDD%20%C3%A9%20a%20sigla%20para,de%20desenvolvimento%20muito%20comum%20atualmente.&text=O%20objetivo%20%C3%A9%20desenvolver%20uma,est%C3%A1%20pronta%20para%20ser%20implementada.)
 - [Babel](https://babeljs.io/): para subir o código para produção

### Pemissas de Desenvolvimento
 - Planejo utilizar do TDD para o desenvolvimento e manutenção do código. 
 - Utilizar de versionamento Major.patch.minor no git para controlar as versões do código

#### Próximos passos
 - Utilizar o Docker para separa nossa aplicação do ambiente em que ela estiver rodando
 - Utilizar uma ferramenta de CI/CD para testar o lint e os testes da aplicação antes de merges
 - Levantar a aplicação em algum ambiente
 - !IMPORTANTE: criar algum cliente para consumir a aplicação, seja cli ou browser

## Features
    MVP
 - Criar um login para um usuário
 - O usuário deve poder cadastrar um filme que ele assistiu e adicionar descrição, língua e características do filme
 - O usuário deve poder acessar os seu filmes vistos
 - O usuário deve poder editar alguma anotação cadastrada de um filme seu

    Segunda parte interação com usuários
 - O usuário deve poder acessar o perfil de outro usuários e acessar a lista de filme deles
 - Alterações na lista de outros usuários devem ser vistas em tempo real

