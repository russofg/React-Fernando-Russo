
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link className="logo" to="/">Plataforma Virtual</Link></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/categoria/Edición">Edición</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/categoria/Programación">Programación</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/">Acerca de Nosotros</Link></Nav.Link>
      <Nav.Link><Link className="links" to="/">Contacto</Link></Nav.Link>
    </Nav>
            <CartWidget/>
    </Container>
    </Navbar>
    )
}

export default NavBar