/// <refrence types = "Cypress" />
describe('Post User create',() =>{
    let accessToken = 'd27cfd2572ad5271a9e0f3ace385a793ef9b744721cddf8d10a6cb8be331cc4c'
    let Email = ""
    let RandomText = ""
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
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
    }).then((res) =>{
//get user details created
    let userid = 6896061
    cy.log("User ID", userid)
    cy.request({
        method : "GET",
        url : 'https://gorest.co.in/public/v2/users/'+ userid,
        headers : {
                  'authorization' : "Bearer " + accessToken
        },  
    }).then((res)=>{

        expect(res.status).to.eq(200)

    })

    })

  })
})