/// <refrence types = "Cypress" />

describe('get api user', () => {

  let accessToken = "d458f0e0f3ea8f2fd0df52e1a825c7401dcea53fb7574290c6cc0b8ec31d7746" 

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