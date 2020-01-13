const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use(require('./routes/router'));

app.listen(port, () => console.log('servidor rodando em localhost:'+ port));