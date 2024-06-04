// import React, { useEffect, useRef } from "react";
// import "./TitleCards.css";
// import cards_data from "../../assets/cards/Cards_data";

// const TitleCards = () => {
//   const cardsRef = useRef();
//   const handleWheel = (event) => {
//     event.preventDefault();
//     cardsRef.current.scrollLeft += event.deltaY;
//   };
//   useEffect(() => {
//     cardsRef.current.addEventListner("wheel", handleWheel);
//   }, []);
//   return (
//     <div className="titlecards">
//       <h2>Popular on Netflix</h2>
//       <div className="card_list" ref={cardsRef}>
//         {cards_data.map((card, index) => {
//           return (
//             <div className="card" key={index}>
//               <img src={card.image} alt="" />
//               <p>{card.name}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
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

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    const currentRef = cardsRef.current;

    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
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
  );
};

export default TitleCards;
