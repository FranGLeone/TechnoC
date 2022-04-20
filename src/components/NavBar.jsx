import {Navbar, Nav, Container, NavDropdown,} from "react-bootstrap";
import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget"
import { SearchContainer,Input, Logo } from './styledComponents';

const NavBar = () =>{
    return(
      <>
      
    <Navbar fixed="top" className="NavbarColor" variant="dark">
    <Container>
      <Navbar.Brand href="/">
      <Logo> <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block"
          />{' '}
       <span className="NavbarTitulo">TechnoCraft</span></Logo> 
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="#action2">Arma tu PC</Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/">Todos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/Mother">Mothers</NavDropdown.Item>
            <NavDropdown.Item href="/category/Memoria RAM">Memorias RAM</NavDropdown.Item>
            <NavDropdown.Item href="/category/Almacenamiento">Procesadores</NavDropdown.Item>
            <NavDropdown.Item href="/category/Placa de video">Placas de video</NavDropdown.Item>
            <NavDropdown.Item href="/category/Procesador">Procesadores</NavDropdown.Item>
            <NavDropdown.Item href="/category/Gabinete">Gabinetes</NavDropdown.Item>
          </NavDropdown>
          <SearchContainer>
                <Input/>
     
            </SearchContainer>
        </Nav>
        <Nav className="mx-4">
          <Nav.Link href="#link">Crear cuenta</Nav.Link>
          <Nav.Link href="#link">Iniciar sesión</Nav.Link>                        
        </Nav>                    
          <CartWidget/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
    )
    
};

export default NavBar;