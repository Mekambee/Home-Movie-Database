Autor - Kamil Piechota:

Projekt Domowa Baza Filmów - prosta aplikacja webowa, umożliwiająca 
zarządzanie kolekcją filmów.

Funkcjonalności aplikacji:

1)Lista filmów: Wyświetlanie listy wszystkich filmów w bazie.

2)Dodawanie filmu: Formularz umożliwiający dodanie nowego filmu (tytuł, reżyser, rok, opis).

3)Edytowanie filmu: Możliwość aktualizacji danych wybranego filmu.

4)Usuwanie filmu: Opcja usunięcia filmu z kolekcji.

5)Wyświetlanie opisu filmu: Strona z pełnym opisem wybranego filmu.

Technoologie użyte w projekcie:

1)Node.js i Express.js:
Uruchamiają serwer, obsługują żądania HTTP i odpowiadają na różne ścieżki, takie jak /movies (lista filmów) czy /movies/add (formularz dodawania filmu).

2)MongoDB i Mongoose:
MongoDB - baza danych noSQL przechowujące nasze dane o filmach w formacie JSON. Mongoose zarządza tymi danymi za pomocą schematu i modelu Movie.

3)EJS:
Generuje dynamiczne strony HTML, które wyświetlają dane (np. lista filmów z bazy danych) lub formularze (np. dodawanie/edycja filmów).

4)CSS - Nadanie stylu aplikacji

5)Middleware (Method Override, Body Parser):
Umożliwiają obsługę zaawansowanych funkcji (PUT, DELETE) i upraszczają obsługę danych przesyłanych z formularzy.

Aby uruchomić aplikację: node app.js

Aby uzupełnić bazę danych o przykładowe dane: node seed.js

Oczywiście, aby program działał uruchomiona musi być baza danych MongoDB - port na którym działa oraz nazwę można 
edytować w pliku .env