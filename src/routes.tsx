import { Route, Routes } from "react-router";
import Home from "./pages/home";
import List from "./pages/list";
import MovieDetails from "./pages/movie-details";
import Search from "./pages/search";
export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="list" element={<List />} />
      <Route path="search" element={<Search />} />
      <Route path="movie/:id" element={<MovieDetails />} />
    </Routes>
  );
}
