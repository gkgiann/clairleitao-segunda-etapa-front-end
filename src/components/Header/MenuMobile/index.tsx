import Dropdown from "react-bootstrap/Dropdown";
import { DropdownContainer } from "./styles";

const URL = import.meta.env.VITE_URL;

export default function MenuMobile() {
  return (
    <DropdownContainer id="dropdown-basic">
      <Dropdown.Toggle>Menu</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={`${URL}`}>Tendências</Dropdown.Item>
        <Dropdown.Item href={`${URL}/list`}>Minha Lista</Dropdown.Item>
        <Dropdown.Item href={`${URL}/search`}>Pesquisar</Dropdown.Item>
      </Dropdown.Menu>
    </DropdownContainer>
  );
}
