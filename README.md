## Shop Box - API

<details>
<summary> Desafio Full Stack Developer | Processo Seletivo Estágio Frexco </summary>

Olá! Essa é a primeira etapa do nosso processo seletivo para vaga de Estágio em Desenvolvimento de Software (Produto). Dê o seu melhor :) 

Você já deve ter pesquisado sobre a empresa, mas aqui te conto um breve resumo sobre a Frexco: 

A Frexco é a principal ponte direta entre produtores e estabelecimentos do Brasil. Entregamos todas as semanas toneladas de alimentos recém colhidos para famílias e estabelecimentos e nosso objetivo é fomentar incessantemente que a cadeia de suprimentos seja mais justa. E tudo isso através da tecnologia! 

Então, para sabermos se você conseguirá nos ajudar nas atividades que temos no time de tecnologia hoje, preparamos um desafio para você! 

Desafio Full Stack Developer

Objetivo: Você foi contratado para criar uma aplicação de controle de estoque. Cada vez que um produto for vendido o mesmo deverá ser debitado do estoque. Sugerimos dividir a aplicação nas seguintes telas:

• Criação, edição, deleção de produto

• Criação, edição, deleção de estoque

• Listagem de produtos x estoque, deleção de produto x estoque A completude e uso das melhores práticas de desenvolvimento serão levadas em conta nesta avaliação.

Requisitos:

• Todo o código deverá ser versionado e publicado para a apresentação em repositório git.

• As seguintes tecnologias e princípios deverão ser aplicadas: reactjs, materialUi, banco de dados: postgree ou sqlite ou mongodb, nodejs, Clean architeture ou DDD, Git.

• Serão considerados diferenciais: Docker compose com geração do front, back e banco de dados. Tela de login com validação via JWT. Uso de typescript tanto para o backend quanto para o frontend.

Você terá 7 dias para concluir o desafio e nos disponibilizar o link do github. Te desejamos boa sorte e happy coding! =D

</details>

## Sobre o Projeto 💭

![Rota Raiz e Get](https://user-images.githubusercontent.com/97923666/171771623-97ac1b24-3ec5-4134-8062-4cf7db6cec09.gif)

![Post, Put e Delete](https://user-images.githubusercontent.com/97923666/171771628-ff418452-dabf-4354-a255-bf83734280ff.gif)

Interface de Programação de Aplicação (API) desenvolvida em Nodejs com Framework Expressjs, biblioteca CORS para evitar erros nos endpoints em alguns navegadores, utilizando SQLite (Banco leve e escalavel, já que permite a sincronização de dados, não o sobrecarregando) e por fim foi utilizada as rotas do Express para auxiliar na manutenção do código (transferindo responsabilidades do arquivo app para o routes) e deixando-o menos verboso.

Justificando escolha do Expressjs:
- Sistema de rotas completo;
- Utiliza um conjunto pequeno de arquivos e pastas;
- Possibilita o tratamento de exceções dentro da aplicação
- Permite a integração de vários de templates facilitando a criação de páges;
- Gerencia diferentes requisições HTTP com seus mais diversos verbos;

Justificando escolha do SQLite:
- Bom para pequenos aplicativos independentes
- Desenvolvimento básico e testes

## Executando frontend
```bash
npm run dev
```

npm run dev abrirá em http://localhost/8000

##### Possiveis Rotas 🔄
- GET /
- GET /produtos
- POST /produtos
- PUT /produtos
- DELETE /produtos

## Frameworks e Libs utilizadas (Frontend) 🛠️ 
- VSCode
- Node v14.19.3
- Express
- ThunderClient (Extensão VSCode)
- Beekeeper Studio
- CORS
- FS 'FileSystem'
- Nodemon
- Sqlite
- Sqlite3
- Https
- Bodyparser
- SSL

## Links e Fontes
- https://www.npmjs.com/ (NPM)
- https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/ (Conventional Commits)
- https://expressjs.com/pt-br/4x/api.html (Documentação Express)

## Autor
Jordan Cruz
