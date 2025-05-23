import { useParams } from "react-router";
import { MovieDetailsContainer } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import type { DetailedMovie } from "../../types/movie.type";
import { Col, Row, Spinner } from "react-bootstrap";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<DetailedMovie>();

  useEffect(() => {
    api.get(`movie/${id}`).then((res) => {
      const { data } = res;
      console.log(data);
      setMovie(data);
    });
  }, []);

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

            <strong>{movie.runtime} minutos</strong>

            <strong>{movie.release_date.split("-").reverse().join("/")}</strong>
          </Col>
        </Row>
      ) : (
        <Spinner animation="border" />
      )}
    </MovieDetailsContainer>
  );
}
