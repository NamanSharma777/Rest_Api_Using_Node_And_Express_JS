const express = require("express");

const app = express();
const port = 7006;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
  {
    id: 1,
    title: "Chakde India",
    director: "Shimit Amin",
    release_date: "2007-08-10",
  },
  {
    id: 2,
    title: "3 idiots",
    director: "Rajkumar Hirani",
    release_date: "2009-12-09",
  },
];

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  }
  res.status(404).send("Movie not found");
});

app.get("/movie", (req, res) => {
  res.json(movies);
});

app.post("/movie", (req, res) => {
  const movie = req.body;

  movies.push(movie);
  res.send("Movie is added to the list");
});

//search for a movie in the list

//delete
app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movie) => {
    if (movie.id !== id) {
      return true;
    }
    return false;
  });
  res.send("Movie is deleted");
});

app.listen(port, () => console.log("Server Listening at port ${port}"));
