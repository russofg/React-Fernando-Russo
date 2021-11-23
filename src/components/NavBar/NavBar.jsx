
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
      <Link className="links" to="/">Home</Link>
      <Link className="links" to="/categoria/Edición">Edición</Link>
      <Link className="links" to="/categoria/Programación">Programación</Link>
      <Link className="links" to="/">Acerca de Nosotros</Link>
      <Link className="links" to="/">Contacto</Link>
    </Nav>
            <CartWidget/>
    </Container>
    </Navbar>
    )
}

export default NavBar