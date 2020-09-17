// write tests here
describe('New App Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000') 
    })

  
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const checkBox = () => cy.get('input[type="checkbox"]') 
    const submitBtn = () => cy.get('button[type="submit"]')


    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
    })
    
    // Name Test
    it('Checks the Name input', () => {
        nameInput()
            .should('exist')
            .type('TJ Janus')
            .should('have.value', 'TJ Janus') // assertion
    })

    // Email Test
    it('Checks the Email input', () => {
        emailInput()
            .should('exist')
            .type('TJ@TJ.com')
            .should('have.value', 'TJ@TJ.com') // assertion
    })

    // Password Input
    it('Checks the Password Input', () => {
        passwordInput()
            .should('exist')
            .type('password')
    })
    // Terms of Service Checkbox

    it('Checks the TOS', () => {
        checkBox()
            .click()
            .check()
    })

    it('Checks the submit button', () => {
        cy.contains('TJ').should('not.exist')
        nameInput().type('TJ')
        emailInput().type('TJ@TJ.com')
        passwordInput().type('12345678')
        submitBtn().click()
    })

    // When the password field is empty it requires you to type on in
    it('Checks for form validation if an input is empty', () => {
        nameInput()
            .type('tj')
        emailInput()
            .type('value@value.com')
        passwordInput()
            .type('123456789')
            .clear()
    })
   

    

})