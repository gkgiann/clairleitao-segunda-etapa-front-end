import Dropdown from "react-bootstrap/Dropdown";
import { DropdownContainer } from "./styles";

export default function MenuMobile() {
  return (
    <DropdownContainer id="dropdown-basic">
      <Dropdown.Toggle>Menu</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/">Tendências</Dropdown.Item>
        <Dropdown.Item href="/list">Minha Lista</Dropdown.Item>
        <Dropdown.Item href="/search">Pesquisar</Dropdown.Item>
      </Dropdown.Menu>
    </DropdownContainer>
  );
}
