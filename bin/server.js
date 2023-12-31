'use strict'

const app = require('../src/app')
const debug = require('debug')('nodeprodutos:server');
const http = require('http');

const porta = verificaPorta(process.env.PORT || '3000');
app.set('port',porta);

const server = http.createServer(app);

server.listen(porta);
server.on('error',onError);
server.on('listening',onListening);

function verificaPorta(wporta){
   const port = parseInt(wporta,10);
   if (isNaN(port)){return wporta;}
   if (port >= 0){return port}
   return false;
}

function onError(error){
   if (error.syscall !== 'listen'){throw error;}
   const bind = typeof port == 'string' ? 'Pipe '+port : 'Port '+port
   switch (error.code){
      case 'EACCESS':
         console.error(bind+' privilégios de administrador')
         process.exit(1);
         break;
      case 'EADDRINUSE':
         console.error(bind+' está em uso');
         process.exit(1);
         break;
      default:
         throw error;   
   }
}

function onListening(){
   const addr = server.address();
   const bind = typeof addr === 'string'
      ? 'pipe '+addr
      : 'port '+addr.port;
   debug('Listening on '+bind);
}