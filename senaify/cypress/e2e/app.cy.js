describe('template spec', () => {

  before(() => {
    cy.visit('/')
  });

  it('Verificar se o header está visivel', () => {
    // cy.visit(' http://localhost:8081')
    //capturar o elemento title, e ver se ele está visivel
    cy.get("[aria-label ='title-head']").should("be.visible");
    cy.get("[aria-label ='title-head']").should("contain", 'Good morning');
  });

  it("Verificar se tem item na listagem de playlist", () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 1);
  });

  it("Clicar no primeiro item da lista", () => {
    cy.wait(2000)
    cy.get('[aria-label="playlist-item"]',).first().click();

    cy.get('[aria-label="music-item"]').should("have.length.greaterThan", 1);
  });

  it("Clicar na música desejada e executa o audio", () => {
    cy.get('[aria-label = "music-item"]').contains("Lua").click();

    cy.scrollTo("top")
  });

  it("Volto para a listagem de playlists", () => {
    cy.wait(2000)
    cy.get("[aria-label ='left-arrow']").click();
    cy.scrollTo("top")
  })

  //Mesmo código anterior
  it("Verificar se tem item na listagem de playlist", () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 1);
  });


  it("Clico na segunda playlist", () => {
    cy.wait(2000)

    cy.get('[aria-label="playlist-item"]',).eq(2).click();

    cy.get('[aria-label="music-item"]').should("have.length.greaterThan", 1);
  });

  it("Clicar na música desejada e executa o audio", () => {
    cy.get('[aria-label = "music-item"]').contains("Tropa").click();

    cy.scrollTo("top")
  });

})