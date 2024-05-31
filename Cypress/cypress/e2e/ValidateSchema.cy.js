/// <refrence types = "Cypress" />

describe('Validate Schema',() =>{

    const Ajv = require('ajv')
    const avj = new Ajv()

it('Validate Get Request Schema',() =>{
cy.request({
method: 'GET',
url: 'https://fakestoreapi.com/products',
qs: {limit:1}
}).then((response)=>{

    expect(response.status).to.eq(200)
    cy.log(response)

    var schema = 
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number"
            },
            "title": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "description": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "image": {
              "type": "string"
            },
            "rating": {
              "type": "object",
              "properties": {
                "rate": {
                  "type": "number"
                },
                "count": {
                  "type": "number"
                }
              },
              "required": [
                "rate",
                "count"
              ]
            }
          },
          "required": [
            "id",
            "title",
            "price",
            "description",
            "category",
            "image",
            "rating"
          ]
        }
      }

 const variable = avj.compile(schema)
 const value = variable(response.body)
expect(value).eq(true)

})

})  

})