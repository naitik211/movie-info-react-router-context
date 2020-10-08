import React, { useState, useEffect } from "react";
import "./App.css";
import Content from "./MovieList";
import MovieCard from "./MovieCard";
import Header from "./Header";
import { Route } from "react-router-dom";

export const DataContext = React.createContext();

function App() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("top-rated-indian-movies.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovieData(data);
      });
  }, []);

  return (
    <DataContext.Provider value={movieData}>
      <div className="wrapper">
        <Header />
        <main>
          <Route exact path="/" component={Content} />
          <Route path="/:cardId" component={MovieCard} />
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
