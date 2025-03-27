const express = require('express');
const app = express();
const port = 3000;

const knex = require('knex')(require('./knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// GET
app.get('/movies', (req, res) => {
    knex('movies')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: 'Move data could not be found.' }))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
