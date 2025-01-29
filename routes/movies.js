const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.render('movies/index', { movies });
    } catch (error) {
        res.status(500).send('Błąd serwera przy pobieraniu filmów.');
    }
});

router.get('/add', (req, res) => {
    res.render('movies/add');
});

router.post('/add', async (req, res) => {
    try {
        const { title, director, year, description } = req.body;
        await Movie.create({ title, director, year, description });
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera przy dodawaniu filmu.');
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Film nie znaleziony');
        }
        res.render('movies/edit', { movie });
    } catch (error) {
        res.status(500).send('Błąd serwera przy pobieraniu filmu do edycji.');
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const { title, director, year, description } = req.body;
        const movie = await Movie.findByIdAndUpdate(req.params.id, { title, director, year, description }, { new: true });
        if (!movie) {
            return res.status(404).send('Film nie znaleziony');
        }
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera przy aktualizacji filmu.');
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).send('Film nie znaleziony');
        }
        res.redirect('/movies');
    } catch (error) {
        res.status(500).send('Błąd serwera przy usuwaniu filmu.');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Film nie znaleziony');
        }
        res.render('movies/show', { movie });
    } catch (error) {
        res.status(500).send('Błąd serwera przy pobieraniu szczegółów filmu.');
    }
});

module.exports = router;
