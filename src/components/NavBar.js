import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget"


const NavBar = () =>{
    return(
      <Navbar className="NavbarColor" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block"
          />{' '}
        <span className="NavbarTitulo">TechnoCraft</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Componentes</Nav.Link> 
          <Nav.Link href="#link">Arma tu PC</Nav.Link>        
        </Nav>                   
        <Nav className="mx-4">
          <Nav.Link href="#link">Crear cuenta</Nav.Link>
          <Nav.Link href="#link">Iniciar sesión</Nav.Link>                        
        </Nav>                    
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
    
};

export default NavBar;