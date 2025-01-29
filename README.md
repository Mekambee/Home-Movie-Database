# Movie Editing Platform - WWW classes project

## Project Overview
This project is a **Movie Editing Platform**, built using **Node.js** and **Express.js**, as a simple classes project. The application allows users to edit movie details, view a list of movies, and interact with a movie database.

## Features Implemented
- **Movie Management**: Users can edit movie details through a dynamic UI.
- **Express Router**: Routes are structured for handling different requests.
- **MongoDB Integration**: Data persistence is managed using Mongoose.
- **EJS Templates**: Used for rendering frontend views dynamically.
- **CSS**: The project includes css UI styling.
- **Error Handling**: Proper `try...catch` blocks handle potential errors in async functions.

## Project Structure
```
movie-editing-platform/
│   ├── public/           # Static files (CSS, images)
│   ├── views/            # EJS templates
│   ├── routes/           # Express route handlers
│   ├── models/           # Mongoose models (Movie.js)
│   ├── config/           # Configuration files (DB connection)
│   ├── .env              # Environment variables
│   ├── index.js          # Main entry point
│   ├── package.json      # Dependencies and scripts
```

## Routes Overview
- **`GET /movies`** → Fetch all movies
- **`GET /edit/:id`** → Fetch a single movie for editing
- **`POST /edit/:id`** → Update movie details
- **`POST /movies/add`** → Add new movie
