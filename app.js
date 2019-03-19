const fastify = require('fastify')();


//ROUTES
fastify.register(require('./routes/user'), {prefix: '/users'});

fastify.get('/' , (req,res) => {
    res.send('hello world!!');
})


fastify.listen(3000 , function(err){
    if(err){
        console.log('Error occured');
        process.exit(1);
    }
    console.log('Server is running on port 3000');
});
