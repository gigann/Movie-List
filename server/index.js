const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({ origin: true }));

const knex = require('knex')(require('./knexfile.js')['development']);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

// GET
app.get('/movies', (req, res) => {
    return knex('movies')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: 'All Movie data could not be found.' }))
})
app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    return knex('movies')
        .select('*')
        .where('id', id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: 'Movie id could not be found.' }))
})

// search

app.get('/movies/search/:search', (req, res) => {
    const search = req.params.search;
    return knex('movies')
        .select('*')
        .whereILike('title', `%${search}%`)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(400).json({ message: 'Movie title could not be found.' }))
})
