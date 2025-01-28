require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts')
const moviesRouter = require('./routes/movies');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout','layout');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Połączono z MongoDB'))
    .catch(err => console.error('Błąd połączenia z MongoDB:', err));

app.use('/movies', moviesRouter);

app.get('/', (req, res) => {
    res.redirect('/movies');
});


// Uruchomienie serwera
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serwer działa na http://localhost:${PORT}`));

