const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.render('movies/index', { movies });
});

router.get('/add', (req, res) => {
    res.render('movies/add');
});

router.post('/add', async (req, res) => {
    const { title, director, year, description } = req.body;
    await Movie.create({ title, director, year, description });
    res.redirect('/movies');
});

router.get('/edit/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('movies/edit', { movie });
});

router.put('/edit/:id', async (req, res) => {
    const { title, director, year, description } = req.body;
    await Movie.findByIdAndUpdate(req.params.id, { title, director, year, description });
    res.redirect('/movies');
});

router.delete('/delete/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
});

router.get('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id); // Znajdź film w bazie danych
    res.render('movies/show', { movie });
});

module.exports = router;
