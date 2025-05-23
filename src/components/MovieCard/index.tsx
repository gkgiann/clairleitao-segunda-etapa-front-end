import { Link } from "react-router";
import type { Movie } from "../../types/movie.type";
import { MovieCardContainer } from "./styles";

const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { poster_path, title, id } = movie;

  return (
    <MovieCardContainer title={title}>
      <Link to={`/movie/${id}`}>
        <img src={`${IMAGE_URL}${poster_path}`} />
      </Link>
    </MovieCardContainer>
  );
}
