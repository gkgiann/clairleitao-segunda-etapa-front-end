import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import type { Movie } from "../../types/movie.type";
import { ListContainer, MoviesStack } from "./styles";
import { Spinner } from "react-bootstrap";
import { api } from "../../lib/axios";

const LIST_ID = import.meta.env.VITE_TMDB_LIST_ID;
const SESSION_ID = import.meta.env.VITE_TMDB_SESSION_ID;

export default function List() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  function fetchMovies() {
    setLoading(true);
    api.get(`/list/${LIST_ID}`).then((res) => {
      const results: Movie[] = res.data.items;
      console.log(res.data);

      setMovies(results);
      setLoading(false);
    });
  }

  function handleClearList() {
    if (movies.length === 0) return;

    api
      .post(`/list/${LIST_ID}/clear?session_id=${SESSION_ID}&confirm=true`)
      .then((res) => {
        const { data } = res;

        console.log(data);

        fetchMovies();
      });
  }

  return (
    <ListContainer>
      <div>
        <h1>Minha Lista</h1>
        <button className="button-default" onClick={() => handleClearList()}>
          Limpar lista
        </button>
      </div>

      <MoviesStack direction="horizontal" gap={5}>
        {movies.map((movie, index) => {
          return <MovieCard key={`${movie.id}${index}`} movie={movie} />;
        })}

        {!loading && movies.length === 0 && <h2>Não há filmes na sua lista</h2>}
        {loading && <Spinner animation="border" />}
      </MoviesStack>
    </ListContainer>
  );
}
