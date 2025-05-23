import { Container } from "react-bootstrap";
import Header from "./components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
