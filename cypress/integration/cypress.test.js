describe('Advanced Form Management', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000/pizza');
  });

  const size = () => cy.get('select[name="size"]');
  const sauce = () => cy.get('input[name="sauce"]');
  const sauce1 = () => cy.get('input[id="First"]');
  const sauce2 = () => cy.get('input[id="Second"]');
  const sauce3 = () => cy.get('input[id="Third"]');
  const sauce4 = () => cy.get('input[id="Fourth"]');
  const topping1 = () => cy.get('input[name="topping1"');
  const topping2 = () => cy.get('input[name="topping2"');
  const topping3 = () => cy.get('input[name="topping3"');
  const topping4 = () => cy.get('input[name="topping4"');
  const topping5 = () => cy.get('input[name="topping5"');
  const topping6 = () => cy.get('input[name="topping6"');
  const topping7 = () => cy.get('input[name="topping7"');
  const topping8 = () => cy.get('input[name="topping8"');
  const topping9 = () => cy.get('input[name="topping9"');
  const topping10 = () => cy.get('input[name="topping10"');
  const topping11 = () => cy.get('input[name="topping11"');
  const topping12 = () => cy.get('input[name="topping12"');
  const topping13 = () => cy.get('input[name="topping13"');
  const topping14 = () => cy.get('input[name="topping14"');
  const substitute = () => cy.get('input[name="substitute"]');
  const special = () => cy.get('input[name="special"]');

  it('Sanity Test', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it('Element Test', () => {
    size();
    sauce();
    sauce1();
    sauce2();
    sauce3();
    sauce4();
    topping1();
    topping2();
    topping3();
    topping4();
    topping5();
    topping6();
    topping7();
    topping8();
    topping9();
    topping10();
    topping11();
    topping12();
    topping13();
    topping14();
    substitute();
    special();
  });

  const submit = () => cy.get('button[id="Submit"]');
  const negative = () => cy.get('button[id="Negative"]');
  const positive = () => cy.get('button[id="Positive"]');

  it('Button Test', () => {

    submit();
    negative();
    positive();

    positive()
      .click()

    negative()
      .click()

  });

  it('Chain Test', () => {

    size()
      .should('have.value', '')
      .select('Small')
      .should('have.value', 'Small')
      .select('Medium')
      .should('have.value', 'Medium')
      .select('Large')
      .should('have.value', 'Large');
    submit().should('be.disabled');

    sauce1()
      .should('have.value', '')
      .check()
      .should('have.value', 'Original Red')
    submit().should('be.enabled');

    topping1()
      .should('have.value', 'false')
      .check()
      .should('have.value', 'true')
      .uncheck()
      .should('have.value', 'false');

    special()
      .should('have.value', '')
      .type('Test')
      .should('have.value', 'Test')
      .clear()
      .should('have.value', '')

  });

  it('Multiple Test', () => {

    topping1()
      .check()
      .should('have.value', 'true')

    topping2()
      .check()
      .should('have.value', 'true')

    topping3()
      .check()
      .should('have.value', 'true')

    topping4()
      .check()
      .should('have.value', 'true')

    topping5()
      .check()
      .should('have.value', 'true')

    topping6()
      .check()
      .should('have.value', 'true')

    topping7()
      .check()
      .should('have.value', 'true')

    topping8()
      .check()
      .should('have.value', 'true')

    topping9()
      .check()
      .should('have.value', 'true')

    topping10()
      .check()
      .should('have.value', 'true')

    topping11()
      .check()
      .should('have.value', 'true')

    topping12()
      .check()
      .should('have.value', 'true')

    topping13()
      .check()
      .should('have.value', 'true')

    topping14()
      .check()
      .should('have.value', 'true')

  })

});
