import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            O Nas
          </Nav.Link>
          <Nav.Link to="/zasady" as={NavLink}>
            Zasady
          </Nav.Link>
          <Nav.Link to="/klany" as={NavLink}>
            Nasze Klany
          </Nav.Link>
          <Nav.Link to="/discord" as={NavLink}>
            Discord
          </Nav.Link>
          <Nav.Link to="/nagrody" as={NavLink}>
            Nagrody
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
