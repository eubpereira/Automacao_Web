# Automação Web - Cypress

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![Cypress](https://img.shields.io/badge/Cypress-Latest-blue)](https://cypress.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Projeto de automação de testes end-to-end (E2E) utilizando **Cypress** para validar funcionalidades críticas de aplicações web.

## 📋 Sobre o Projeto

Este repositório contém uma suite de testes automatizados desenvolvida com Cypress para validar fluxos de login, navegação e interações em aplicações web. O projeto segue boas práticas de automação e está estruturado para ser facilmente escalável.

## 🚀 Funcionalidades

- ✅ Testes de login e autenticação
- ✅ Validação de elementos da interface
- ✅ Testes de navegação e fluxos de usuário
- ✅ Capturas de vídeo e screenshots dos testes
- ✅ Relatórios detalhados de execução
- ✅ Integração com CI/CD

## 📦 Requisitos

- **Node.js** >= 16.x
- **npm** >= 8.x ou **yarn** >= 1.22.x
- **Cypress** >= 12.x

## 🔧 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/eubpereira/Automacao_Web.git
cd Automacao_Web
```

2. **Instale as dependências:**

```bash
npm install
```

ou com yarn:

```bash
yarn install
```

## ▶️ Como Executar os Testes

### Modo Interativo (Cypress Test Runner)

```bash
npm run cypress:open
```

Este comando abre a interface gráfica do Cypress onde você pode:
- Visualizar os testes disponíveis
- Executar testes individuais
- Ver os passos em tempo real
- Debugar facilmente

### Modo Headless (Linha de Comando)

```bash
npm run cypress:run
```

### Executar testes específicos

```bash
npm run cypress:run -- --spec "cypress/e2e/login.cy.js"
```

### Executar testes em um navegador específico

```bash
npm run cypress:run -- --browser chrome
npm run cypress:run -- --browser firefox
```

## 📁 Estrutura do Projeto

```
cypress-web-automation/
├── cypress/
│   ├── e2e/                  # Testes end-to-end
│   │   └── login.cy.js       # Testes de login
│   ├── fixtures/             # Dados de teste (fixtures)
│   ├── support/              # Suporte e comandos customizados
│   │   ├── commands.js       # Comandos customizados
│   │   └── e2e.js            # Configurações E2E
│   ├── screenshots/          # Capturas de tela (geradas automaticamente)
│   └── videos/               # Vídeos dos testes (gerados automaticamente)
├── cypress.config.js         # Configuração do Cypress
├── package.json              # Dependências do projeto
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

## 🧪 Exemplos de Testes

### Teste de Login

```javascript
describe('Login Tests', () => {
  it('Should login with valid credentials', () => {
    cy.visit('https://example.com/login')
    cy.get('input[name="email"]').type('user@example.com')
    cy.get('input[name="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

## 🔐 Variáveis de Ambiente

Para configurar variáveis de ambiente, crie um arquivo `.env` na raiz do projeto:

```env
BASE_URL=https://example.com
API_KEY=your_api_key_here
USER_EMAIL=test@example.com
USER_PASSWORD=password123
```

## 📊 Relatórios

Os relatórios de execução são gerados automaticamente em:

- **Screenshots**: `cypress/screenshots/`
- **Vídeos**: `cypress/videos/`
- **Logs**: Console do terminal

## 🛠️ Comandos Customizados

O projeto inclui comandos customizados para facilitar os testes. Veja em [cypress/support/commands.js](cypress/support/commands.js)

## 📚 Documentação Oficial

- [Documentação do Cypress](https://docs.cypress.io/)
- [Guia de Boas Práticas](https://docs.cypress.io/guides/references/best-practices)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um **fork** do projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Faça um **push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

## 📝 Padrões de Código

- Siga as convenções de nomenclatura do Cypress
- Mantenha os testes independentes entre si
- Use dados de fixture quando possível
- Evite hardcoding de valores
- Adicione comentários explicativos quando necessário

## 🐛 Troubleshooting

### Os testes não encontram os elementos

- Verifique se o seletor está correto
- Aguarde o elemento carregar com `cy.get().should('exist')`
- Use `cy.wait()` com cuidado

### Erro de timeout

- Aumente o timeout em `cypress.config.js`
- Verifique se o servidor está rodando
- Confira a velocidade da sua internet

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Euber Pereira**

- GitHub: [@eubpereira](https://github.com/eubpereira)
- Email: seu.email@example.com

## 📧 Suporte

Para dúvidas ou sugestões, abra uma **issue** no repositório ou entre em contato com o autor.

---

<div align="center">

Feito com ❤️ por **Euber Pereira**

⭐ Se este projeto foi útil, deixe uma estrela!

</div>
