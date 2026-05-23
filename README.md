# Automação Web - Cypress

Projeto de testes automatizados usando **Cypress** para validar funcionalidades de aplicações web.

## 📦 Requisitos

- Node.js >= 16.x
- npm >= 8.x

## 🔧 Instalação

```bash
git clone https://github.com/eubpereira/Automacao_Web.git
cd Automacao_Web
npm install
```

## ▶️ Como Executar

**Interface gráfica (recomendado para desenvolvimento):**

```bash
npm run cypress:open
```

**Linha de comando (CI/CD):**

```bash
npm run cypress:run
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/               # Testes end-to-end
├── fixtures/          # Dados de teste
├── support/           # Comandos e configurações
├── screenshots/       # Capturas de tela dos testes
└── videos/            # Vídeos dos testes
```

## 🧪 Testes Disponíveis

- **login.cy.js** - Testes de autenticação e login

## 📚 Documentação

- [Cypress Docs](https://docs.cypress.io/)

## 👤 Autor

**Euber Pereira** - [@eubpereira](https://github.com/eubpereira)
