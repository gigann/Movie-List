const express = require('express');
const app = express();
const port = 3000;

const knex = require('knex')(require('./knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

