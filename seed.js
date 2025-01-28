require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./models/movie');

mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => console.log('Połączono z MongoDB'))
    .catch(err => console.error('Błąd połączenia z MongoDB:', err));

const seedMovies = [
    {
        title: "Skazani na Shawshank",
        director: "Frank Darabont",
        year: 1994,
        description: "Mężczyzna niesłusznie skazany za morderstwo zaprzyjaźnia się z innym więźniem i odnajduje nadzieję w trudnych warunkach."
    },
    {
        title: "Ojciec chrzestny",
        director: "Francis Ford Coppola",
        year: 1972,
        description: "Starzejący się patriarcha mafijnej rodziny przekazuje kontrolę nad imperium swojemu niechętnemu synowi."
    },
    {
        title: "Mroczny Rycerz",
        director: "Christopher Nolan",
        year: 2008,
        description: "Batman musi stawić czoła Jokerowi, który sieje chaos w Gotham City."
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        description: "Przeplatające się historie dwóch płatnych zabójców, boksera i gangstera w Los Angeles."
    },
    {
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        description: "Opowieść o Forrestie Gumpie, mężczyźnie o niskim IQ, który osiąga niesamowite rzeczy w życiu."
    },
    {
        title: "Incepcja",
        director: "Christopher Nolan",
        year: 2010,
        description: "Złodziej kradnący tajemnice z umysłów ludzi w snach podejmuje się trudnego zadania zasadzenia idei."
    },
    {
        title: "Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        year: 1999,
        description: "Haker odkrywa prawdę o rzeczywistości i dołącza do rebelii, by uwolnić ludzkość spod kontroli maszyn."
    },
    {
        title: "Podziemny krąg",
        director: "David Fincher",
        year: 1999,
        description: "Bezsenny pracownik biurowy i sprzedawca mydła tworzą tajny klub walki."
    },
    {
        title: "Chłopcy z ferajny",
        director: "Martin Scorsese",
        year: 1990,
        description: "Historia młodego człowieka wspinającego się po szczeblach mafijnej hierarchii."
    },
    {
        title: "Władca Pierścieni: Powrót Króla",
        director: "Peter Jackson",
        year: 2003,
        description: "Ostateczna bitwa o Śródziemie rozpoczyna się, gdy Frodo i Sam docierają do Góry Przeznaczenia."
    },
    {
        title: "The Social Network",
        director: "David Fincher",
        year: 2010,
        description: "Historia powstania Facebooka i procesów sądowych, które temu towarzyszyły."
    },
    {
        title: "Parasite",
        director: "Bong Joon Ho",
        year: 2019,
        description: "Biedna rodzina wprowadza się podstępem do domu bogatych ludzi, co prowadzi do dramatycznych wydarzeń."
    },
    {
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        description: "Grupa odkrywców podróżuje przez tunel czasoprzestrzenny, by znaleźć nowy dom dla ludzkości."
    },
    {
        title: "Lista Schindlera",
        director: "Steven Spielberg",
        year: 1993,
        description: "Prawdziwa historia Oskara Schindlera, który uratował tysiące Żydów podczas Holokaustu."
    },
    {
        title: "Gladiator",
        director: "Ridley Scott",
        year: 2000,
        description: "Rzymski generał szuka zemsty po zdradzie i zostaje zmuszony do walki jako gladiator."
    }
];

Movie.insertMany(seedMovies)
    .then(() => {
        console.log("Dodano przykładowe filmy!");
        mongoose.connection.close();
    })
    .catch(err => {
        console.error("Błąd podczas dodawania filmów:", err);
    });
