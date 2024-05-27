describe('template spec', () => {
  it('Tela de Favoritos ', () => {
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela de Favoritos', () => {
    cy.get("[href='/Favorites']").click();

    cy.scrollTo("top");
  })

  it("Verificar se tem item na listagem de playlist", () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 1);
  });

  it("Clicar no primeiro item da lista", () => {
    cy.wait(2000)
    cy.get('[aria-label="music-item"]',).first().click();
    cy.scrollTo("top");
  });
})