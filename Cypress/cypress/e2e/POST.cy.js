/// <refrence types = "Cypress" />
describe('Post User create',() =>{
    let accessToken = 'b36af3df2be8b313967328ae6120e97366af49a77255cf5b607b833cfba98dd0'
    let Email = ""
    let RandomText = ""
    const characters ='d27cfd2572ad5271a9e0f3ace385a793ef9b744721cddf8d10a6cb8be331cc4c'
    let userid= '' 


    //Random Email Generation
    for ( let i = 0; i < 10; i++ ) 
        RandomText += characters.charAt(Math.floor(Math.random() * characters.length));
        Email = RandomText + "@gmail.com";

    //Call data from fixtures>createuserdatajson
    const datajson = require('../fixtures/CreateUserData')

//create user
it('Create User', () => {    
    cy.request({
    method : 'POST',
    url : 'https://gorest.co.in/public/v2/users',
    headers : {
              'authorization' : 'Bearer ' + accessToken
    },
    body:{
        "name":datajson.name,
        "gender":datajson.gender,
        "email":Email,
        "status":datajson.status
    }

    }).then((res)=>{
    cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201)
      expect(res.body).has.property('name',datajson.name)
      expect(res.body).has.property('status',datajson.status)
      expect(res.body).has.property('gender',datajson.gender)
      expect(res.body).has.property('email',Email)
      userid = res.body.id
      cy.log("User ID Created: "+userid)
    })
    cy.request({
        method : "GET",
        url : 'https://gorest.co.in/public/v2/users/'+ userid,
        headers : {
                  'authorization' : "Bearer " + accessToken
        },  
    }).then((res1)=>{

        expect(res1.status).to.eq(200)
        cy.log("ID: " + res1.body[0].id)
        cy.log("Name: " + res1.body[0].name)
        cy.log("Gender: " + res1.body[0].gender)
        cy.log("Email: " + res1.body[0].email)
        cy.log("Status: " + res1.body[0].status)

    })

    })

  })
