import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import type { Movie } from "../../types/movie.type";
import MovieCard from "../../components/MovieCard";
import { HomeContainer, MoviesStack } from "./styles";
import { Spinner } from "react-bootstrap";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, []);

  function fetchMovies(page: number) {
    api.get(`/trending/movie/week?page=${page}`).then((res) => {
      const results: Movie[] = res.data.results;

      setMovies([...movies, ...results]);
    });
  }

  function handleLoadMore() {
    fetchMovies(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }

  return (
    <HomeContainer>
      <h1>Tendências da semana</h1>

      <MoviesStack direction="horizontal" gap={5}>
        {movies.map((movie, index) => {
          return <MovieCard key={`${movie.id}${index}`} movie={movie} />;
        })}

        {movies.length === 0 && <Spinner animation="border" />}
      </MoviesStack>

      {movies.length > 0 && (
        <button className="button-default" onClick={() => handleLoadMore()}>
          Carregar mais...
        </button>
      )}
    </HomeContainer>
  );
}
