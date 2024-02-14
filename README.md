# Collab TestCase

## Detalhes da implementação do projeto

Este projeto tem como finalidade a exibição e listagem de usuários provindodas da API [ RandomUserGenerator ].
Para tal foi adotado alguns paradigmas e padrões comuns ao desenvolvimento para dá prosseguimento:
 
- Padrão MVC com Service Pattern no backend
- React, componentes funcionais, contextApi, app routes no frontend

## Features

- Listagem de usuários ( fixo em 10 )
- Exibição dos detalhes do usuário
- Plus: Uso do hook useSWR para manter um fluxo de atualização constante ( curiosidade minha mesmo )

## Tech

Para a realiação desse projeto foram utilizados os seguintes projetos:

- [NodeJS] - Open-source, cross-platform JavaScript runtime environment.
- [AdonisJS] - Nodejs/Typescript Webframework
- [NextJS] - React production-ready framework
- [Tailwind] - Css utility framework

## Installation

Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

## api
```sh
cd collab_testcase/api
cp .env.example .env
npm i
node run dev
```

## web
```sh
cd collab_testcase/web
npm i
node run dev
```

- API: [localhost:3333/api/users]
- Web: [localhost:3000/users]

## TODO

Como todo projeto, gosto de criar uma lista de possiveis melhorias

- Adição de docker
- Melhorar a UI para deixar mais fluido. 
- Trocar a exibição em cards por uma tabela. Assim facilitaria a implementação de buscas, paginação etc.
- Remover context api e adicionar redux