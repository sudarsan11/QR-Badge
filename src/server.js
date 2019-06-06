const http = require('http');
const app = require('../backend/app')
const port = 3200;

app.set('port', port);
const server = http.createServer(app);

server.listen(3200);
