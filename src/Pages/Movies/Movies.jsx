import React, { useEffect, useRef, useState } from "react";
import "./Movies.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

const Movies = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTY5NzZiZjg5MTBmZDRhOGE5MDY5Y2U5MzRmZmU5NCIsInN1YiI6IjY2NTgyMjhjYzk0MGNmYzVjZDc0ZGQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cjGWjc_34Hirk4NXjugFAUfKONqHEyK0h_0-cmyD6Vc",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="movies">
        <h2>Movies</h2>
        <div className="card_lists" ref={cardsRef}>
          {apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="cards" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt=""
                />
                <p>{card.original_title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Movies;
