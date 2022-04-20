describe('Tests for non authorized users', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    // Top Nav
    cy.get('header').contains('AIO.app');
    cy.get('header').contains('Sign in');

    // Side Nav
    cy.get('#sidebarMenu').contains('Home');
    cy.get('#sidebarMenu').contains('Sign in');
    cy.get('#sidebarMenu').contains('Register');
    cy.get('#sidebarMenu').contains('Forgot Password');

    // Main Content (Router Outlet)
    cy.get('main').contains('XYZ Sports Facility');
    cy.get('main').contains('Recreation Management');
  });
});

describe('Tests for authorized users', () => {
  it('Login as user', () => {
    cy.visit('/');
    cy.get('header').contains('Sign in').click();
    cy.get('main').contains('Sign In');
    cy.get('main').contains('Username:');
    cy.get('main').contains('Password:');
    cy.get('main').contains('Forgot Password?');
    cy.get('main').contains('Register');

    cy.get('main').get('#Username').type('okbehnddrnhshgxeca@bvhrk.com');
    cy.get('main').get('#Password').type('demo123');
    cy.get('main').get('.btn-outline-success').click();

    cy.get('main').contains('Welcome User!');
  });

  it('Logout', () => {
    cy.get('header').contains('Sign out');
    cy.get('header').contains('Sign out').click();
    cy.get('header').contains('Sign in');
  });
});
