
# Cypress API Testing

## Descrição

Este repositório contém um conjunto de testes automatizados para testar a API da demoQA utilizando o **Cypress**. 

Este repositório inclui:
- Testes para listar, criar, gerar token, confirmar usuário, listar livros, alugar dois livros e listar detalhes do usuário com livro escolhido.
- Integração com o plugin `cypress-allure` para dashoboards e relatórios.
- Geradores de dados dinâmicos com `faker.js` para criar dados de teste realistas.
- Utilização da lib dotEnv para preservar a URL da aplicação.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [dotenv](https://www.npmjs.com/package/dotenv) - proteger dados sensiveis 
- [faker.js](https://github.com/faker-js/faker) - Gerador de dados aleatórios para os testes
- [allure](https://allurereport.org/docs/cypress/) - Relatórios de teste

## Como Iniciar

## 💻 Pré-requisitos
- Possuir o `Node.js` instalado
- Possuir o `Git`  instalado

## 🔗Clonar o projeto 
Execute o seguinte comando em seu terminal:	

    git clone https://github.com/Joaovscampos/desafio1_api.git

## 🚀 Executando o projeto
**OBS: Para executar o projeto é necessário que você tenha clonado.**

Siga os seguintes passos para fazer a execução:

    cd desafio1_api
### Executar pela primeira vez 
Instalar as dependências 

    npm install 
executar as specs

    npm run cy:run

Comandos de execução:

-   **npm run cy:open**: abrir interface gráfica do cypress.
-   **npm run cy:run**: Execução headless
-   **npm run allure:open**: após primeira execução headless - abrir dashboard
