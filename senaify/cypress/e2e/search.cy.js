describe('template spec',  () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('Redirecionar a minha tela para a tela busca', () => {
    cy.get("[href='/Search']").click();

    cy.scrollTo("top");
  })

  it("Procurar por uma música", () =>{
    cy.get("[data-testid='campoBusca']").type('Formula')

    cy.get("[aria-label='music-item']").filter(':contains("Formula")', {matchCase: true}).click()

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0);
    cy.scrollTo("top");
  })

  // it("Verifica se existe a musica exata", () => {
  //   cy.get("[aria-label='music-item']").contains(/^Samba de Malandro/i).click()
  // })

  it("Cliclou no botao de curtir", async() => {
    let musicaProcurada;
    cy.get("[aria-label='music-item']").contains(/^Formula/i).then((item) => {
      musicaProcurada=item;
    })

    if(musicaProcurada){
      let buttonIcon;
      await cy.get(musicaProcurada).then((item) =>{
        buttonIcon = musicaProcurada.find("[data-testid='icon-button'")
      });

      if(buttonIcon){
        console.log(buttonIcon);
        buttonIcon.click()
      }
    }
    // let BotaoCurtir = musicaProcurada.find("[aria-label='icon-like']");

    // BotaoCurtir.click();
  })

  it("Clicou no botao de curtir", async () => {
    cy.wait(1500)

    cy.get("[aria-label='music-item']").filter().first().then(async(item) =>{
      cy.wrap(item).find("[data-testid='icon-button']").click()
    });
  })
})