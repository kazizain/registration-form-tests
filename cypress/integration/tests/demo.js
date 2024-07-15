describe('Registration Form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/'); //(it my url)
    });
  
    it('should register a user with valid inputs', () => {
      cy.get('input[name="fullName"]').type('Qazi Zain');
      cy.get('input[name="email"]').type('qazi.zain@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('input[name="gender"][value="Male"]').check();
      cy.get('input[name="newsletter"][value="Yes"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/welcome');
      cy.contains('Welcome, John Doe');
    });
  
    it('should show an error for invalid email format', () => {
      cy.get('input[name="fullName"]').type('John Doe');
      cy.get('input[name="email"]').type('john.doe');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="dob"]').type('1990-01-01');
      cy.get('input[name="gender"][value="Male"]').check();
      cy.get('input[name="newsletter"][value="Yes"]').check();
      cy.get('button[type="submit"]').click();
  
      cy.contains('Invalid email address');
    });
  });
  