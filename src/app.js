const express = require('express');

const app = express();

const router = express.Router();

var rota = router.get('/',(req,res,next) => {
   res.status(200).send({
      title:"Produtos API",
      version: "1.0.0"
   });
});

var create = router.post('/',(req,res,next) => {
   res.status(201).send(req.body);
});

app.use('/',rota);
app.use('/produtos',create);

module.exports = app;