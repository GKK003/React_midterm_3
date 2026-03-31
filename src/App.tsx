import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TvSeries from "./pages/TvSeries";
import BookMarkedPage from "./pages/BookmarkedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvseries" element={<TvSeries />} />
          <Route path="/bookmarked" element={<BookMarkedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
