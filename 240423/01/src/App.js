import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
