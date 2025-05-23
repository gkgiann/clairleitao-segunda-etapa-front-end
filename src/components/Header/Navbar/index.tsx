import { NavLink } from "react-router";
import { NavbarContainer } from "./styles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Tendências
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Minha Lista
      </NavLink>
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Buscar
      </NavLink>
    </NavbarContainer>
  );
}
