async function routes(fastify , options) {
    
    const opts = {
        schema: {
          response: {
            200: {
              type: 'object',
              properties: {
                username: { type: 'string' },
                password : {type : 'string'},
                PhoneNo : {type : 'integer'}
              }
            }
          }
        }
      }


    //TODO LIST
    fastify.post('/register' , opts ,async(req,res) => {
        let userInfo = req.body;
        console.log(req.body);
        return { username: userInfo.username , password : userInfo.password , PhoneNo : userInfo.PhoneNo }
    });

    fastify.get('/login' , opts ,async(req,res) => {
        return { fname: 'zohaib' , lname : 'jawaid' , PhoneNo : 1234 }
    });

    fastify.get('/forget' , opts ,async(req,res) => {
        return { fname: 'zohaib' , lname : 'jawaid' , PhoneNo : 1234 }
    });
}

module.exports = routes;