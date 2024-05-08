/// <refrence types = "Cypress" />

describe('get api user', () => {

  let accessToken = "ca5bc36b2f935ea61824051239a9fcff74b3045312238460b9938a03dd96b372" 

  it('passes', () => {
    cy.request({
method : 'GET',
url : 'https://dummyjson.com/products'

    }).then((res)=>{

      expect(res.status).to.eq(200)
    })
  })

  it('passes', () => {
    cy.request({
    method : "GET",
    url : "https://gorest.co.in/public/v2/users",
    headers : {
              'authorization' : "Bearer " + accessToken
    }

    }).then((res)=>{

      expect(res.status).to.eq(200)
    })
  })


})