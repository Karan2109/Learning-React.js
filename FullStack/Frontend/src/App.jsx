import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") //proxy : http://localhost:3000
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);
  return (
    <>
      <h1>Hello! It's me Laughter</h1>
      <p>JOKES: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h3>{joke.content}</h3>
        </div>
      ))}
    </>
  );
};

export default App;
