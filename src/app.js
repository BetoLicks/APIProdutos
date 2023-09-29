const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const router = express.Router();

const index = require('./rotas/index')
const produtos = require('./rotas/produtos')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/',index);
app.use('/produtos',produtos);

module.exports = app;