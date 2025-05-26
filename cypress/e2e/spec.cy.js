  describe('Testes com login via API', () => {
  it('passes', () => {
    cy.login('fulano@qa.com','teste')
    cy.visit('https://front.serverest.dev/admin/home')
    cy.get("[data-testid='listar-produtos']").click()
    cy.productRegister('sombra10', 1.0, 'make', 100)
    cy.get("[data-testid='listar-produtos']").click()
    cy.get('tbody').click()
    cy.get('tr').each(($row) => {
      if($row.find('td').eq(0).text() == 'sombra10') {
      $row.find('td').eq(5).children('div').children('.btn-danger').click()
      }
    })
})

it('scenario 2', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get("[name='email']").type('fulano@qa.com')
    cy.get("[data-testid='senha']").type('teste')
    cy.get("[type='submit']").click()
    cy.get('h1').contains('Bem Vindo Fulano da Silva')

})
})


    





