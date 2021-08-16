const { server }= require('./server');

const port = process.env.port || 8080;

server.listen(port, ()=>console.log(`listening on http://localhost:${port}/`));

