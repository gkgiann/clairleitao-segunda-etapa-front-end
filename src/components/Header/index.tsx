import { HeaderContainer } from "./styles";
import movieSVG from "../../assets/movie.svg";
import { Link } from "react-router";
import Navbar from "./Navbar";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/" className="logo">
        <img src={movieSVG} />
        <h1>MegaMovies</h1>
      </Link>

      <Navbar />
      <MenuMobile />
    </HeaderContainer>
  );
}
