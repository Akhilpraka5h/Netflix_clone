import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Player from "./Pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TvShow from "./Pages/TVShows/TvShow";
import Movies from "./Pages/Movies/Movies";
import New_Popular from "./Pages/New&Popular/New_Popular";
import MyList from "./Pages/MyList/MyList";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/popular" element={<New_Popular />} />
        <Route path="/mylist" element={<MyList />} />

        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
