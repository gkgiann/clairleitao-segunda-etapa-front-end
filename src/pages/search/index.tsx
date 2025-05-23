import { useState, type FormEvent } from "react";
import { api } from "../../lib/axios";
import type { Movie } from "../../types/movie.type";
import MovieCard from "../../components/MovieCard";
import { SearchContainer, MoviesStack } from "./styles";
import { Spinner } from "react-bootstrap";

export default function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function searchMovies(page: number) {
    setLoading(true);

    const { data } = await api.get(
      `/search/movie?query=${search}&page=${page}`
    );

    const results: Movie[] = data.results;
    console.log(data);

    setTotalPages(data.total_pages);

    if (page === 1) {
      setMovies(results);
    } else {
      setMovies([...movies, ...results]);
    }

    setLoading(false);
  }

  function handleSearchMovies(e: FormEvent) {
    e.preventDefault();

    if (search.trim() === "") return;

    searchMovies(1);
    setCurrentPage(1);
  }

  function handleLoadMore() {
    searchMovies(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }

  return (
    <SearchContainer>
      <h1>Pesquise por filmes</h1>
      <form onSubmit={handleSearchMovies}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          required
        />
        <button className="button-default" type="submit">
          Pesquisar
        </button>
      </form>

      {loading && <Spinner animation="border" />}

      <MoviesStack direction="horizontal" gap={5}>
        {movies.map((movie, index) => {
          return <MovieCard key={`${movie.id}${index}`} movie={movie} />;
        })}
      </MoviesStack>

      {movies.length > 0 && currentPage < totalPages && (
        <button className="button-default" onClick={() => handleLoadMore()}>
          Carregar mais...
        </button>
      )}
    </SearchContainer>
  );
}
