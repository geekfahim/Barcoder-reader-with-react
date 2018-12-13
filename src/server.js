const http =require('http');
const app =require('./App');
const port=process.env.PORT || 7000;

const server = http.createServer(app);
server.listen(port);

module.exports = server;