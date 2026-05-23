describe('Realizar Cadastro', () => {
  // cenário 1
  it('deve realizar cadastro', () => {
    cy.visit('https://automationpratice.com.br/register');
    cy.get('#user').type('Bernardo'); 
    cy.get('#email').type('bernardo@email.com');
    cy.get('#password').type('123456');
    cy.get('#btnRegister').click();

    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!');


  });
});


describe('Inserir e-mail inválido no cadastro', () => {
  // cenário 1
  it('deve exibir mensagem de erro para e-mail inválido', () => {
    cy.visit('https://automationpratice.com.br/register');
    cy.get('#user').type('Bernardo'); 
    cy.get('#email').type('bernardoemailcom');
    cy.get('#password').type('123456');
    cy.get('#btnRegister').click();

    cy.get('#errorMessageFirstName').should('have.text', 'O campo e-mail deve ser prenchido corretamente');


  });
});



describe('Inserir senha inválida no cadastro', () => {
  // cenário 1
  it('deve exibir mensagem de erro para senha inválida', () => {
    cy.visit('https://automationpratice.com.br/register');
    cy.get('#user').type('Bernardo'); 
    cy.get('#email').type('bernardo@email.com');
    cy.get('#password').type('123');
    cy.get('#btnRegister').click();

    cy.get('#errorMessageFirstName').should('have.text', 'O campo senha deve ter pelo menos 6 dígitos');
   

  });
});


describe('Realizar cadastro sem o nome inserido', () => {
  // cenário 1
  it('deve exibir mensagem de erro realizar cadastro sem o nome', () => {
    cy.visit('https://automationpratice.com.br/register'); 
    cy.get('#email').type('bernardo@email.com');
    cy.get('#password').type('123');
    cy.get('#btnRegister').click();

    cy.get('#errorMessageFirstName').should('have.text', 'O campo nome deve ser prenchido');
   

  });
});



describe('Realizar Login', () => {
  // cenário 1
  it('deve visitar a página de login', () => {
    cy.visit('https://automationpratice.com.br/login');
    cy.get('#user').type('testando@email.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();

    cy.get('#swal2-title').should('have.text', 'Login realizado');
  });
});


describe('Inserir senha inválida no login', () => {
  // cenário 2
  it('deve validar senha inválida ao realizar login', () => {
 cy.visit('https://automationpratice.com.br/login');
    cy.get('#user').type('testando@email.com');
    cy.get('#password').type('456');
    cy.get('#btnLogin').click();

    cy.get('.invalid_input').should('have.text', 'Senha inválida.');
  });
});


describe('Inserir e-mail inválida no login', () => {
  // cenário 2
  it('deve validar e-mail inválido ao realizar login', () => {
 cy.visit('https://automationpratice.com.br/login');
    cy.get('#user').type('testandomailcom');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();

    cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
  });
});


describe('Adicionar item da lista de favoritos ao carrinho', () => {
  // cenário 2
  it('deve realizar a adição de item da lista de favoritos ao carrinho', () => {
 cy.visit('https://automationpratice.com.br/login');
    cy.get('.mobile-right-side > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa').click();
    cy.get('.offcanvas-wishlist-action-button > li > .theme-btn-one').click();
    cy.get(':nth-child(1) > .product_addcart > .theme-btn-one').click();

    cy.get('.swal2-popup');
  });
});


describe('Limpar itens do carrinho', () => {
  // cenário 2
  it('deve limpar itens do carrinho', () => {
 cy.visit('https://automationpratice.com.br/login');
 cy.get(':nth-child(3) > .offcanvas-toggle > .fa').click();
 cy.get('.offcanvas-cart-action-button > :nth-child(1) > .theme-btn-one').click();
 cy.get('.cart_submit > .theme-btn-one').click();

 cy.get('h2').should('have.text', 'YOUR CART IS EMPTY');

  });
});


describe('Adicionar item do site aos favoritos', () => {
  // cenário 2
  it('deve adicionar item do site aos favoritos', () => {
 cy.visit('https://automationpratice.com.br/login');
cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click();
cy.get('#menuShopText').click();
cy.get(':nth-child(2) > :nth-child(1) > .mobile-sub-menu > :nth-child(1) > a').click();
cy.get(':nth-child(1) > .product_wrappers_one > .thumb > .actions > .wishlist').click();


cy.get('.swal2-popup'); 


  });
});