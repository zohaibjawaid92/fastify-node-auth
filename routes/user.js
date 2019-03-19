async function routes(fastify , options) {
    
    const opts = {
        schema: {
          response: {
            200: {
              type: 'object',
              properties: {
                fname: { type: 'string' },
                lname : {type : 'string'},
                PhoneNo : {type : 'number'}
              }
            }
          }
        }
      }


    //TODO LIST
    fastify.get('/list' , opts ,async(req,res) => {
        return { fname: 'zohaib' , lname : 'jawaid' , PhoneNo : 1234 }
    });
}

module.exports = routes;