async function routes(fastify , options) {
    
    fastify.get('/:id' , async(req,res) => {
        res.send({
            id : req.params.id,
            name : 'zohaib',
            lname : 'jawaid'
        })
    })
}

module.exports = routes;