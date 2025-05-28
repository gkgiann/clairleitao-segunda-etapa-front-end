import { useParams } from "react-router";
import { MovieDetailsContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import type { DetailedMovie } from "../../types/movie.type";
import { Col, Row, Spinner } from "react-bootstrap";
import { minutesToHours } from "../../utils/minutesToHours";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
const LIST_ID = import.meta.env.VITE_TMDB_LIST_ID;
const SESSION_ID = import.meta.env.VITE_TMDB_SESSION_ID;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<DetailedMovie>();
  const [movieInList, setMovieInList] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get(`/list/${LIST_ID}/item_status?movie_id=${id}`).then((res) => {
      const { data } = res;
      setMovieInList(data.item_present);

      api.get(`movie/${id}`).then((res) => {
        const { data } = res;
        console.log(data);
        setMovie(data);
      });
    });
  }, []);

  function handleAddToList() {
    setLoading(true);
    api
      .post(`/list/${LIST_ID}/add_item?session_id=${SESSION_ID}`, {
        media_id: id,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setMovieInList(true);
        setLoading(false);
      });
  }

  function handleRemoveFromList() {
    setLoading(true);
    api
      .post(`/list/${LIST_ID}/remove_item?session_id=${SESSION_ID}`, {
        media_id: id,
      })
      .then((res) => {
        const { data } = res;
        console.log(data);
        setMovieInList(false);
        setLoading(false);
      });
  }

  return (
    <MovieDetailsContainer>
      {movie ? (
        <Row>
          <Col>
            <img src={`${IMAGE_URL}${movie?.poster_path}`} alt={movie?.title} />
          </Col>
          <Col className="info">
            <h1>{movie?.title}</h1>
            <p>{movie?.overview}</p>
            <span className="average">{movie.vote_average.toFixed(1)}</span>

            <strong>{movie?.genres.map((g) => g.name).join(", ")}</strong>

            <strong>{minutesToHours(movie.runtime)}</strong>

            <strong>{movie.release_date.split("-").reverse().join("/")}</strong>

            {movieInList ? (
              <button
                onClick={() => handleRemoveFromList()}
                className="button-default"
              >
                {loading ? "Removendo..." : "Remover da lista"}
              </button>
            ) : (
              <button
                onClick={() => handleAddToList()}
                className="button-default"
              >
                {loading ? "Adicionando..." : "+ Adicionar à lista"}
              </button>
            )}
          </Col>
        </Row>
      ) : (
        <Spinner animation="border" />
      )}
    </MovieDetailsContainer>
  );
}
