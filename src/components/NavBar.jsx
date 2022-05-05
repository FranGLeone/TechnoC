import {Navbar, Nav, Container, NavDropdown,} from "react-bootstrap";
import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget"
import { SearchContainer,Input, Logo } from './styledComponents';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"


const NavBar = () =>{
    return(
      <>
      
    <Navbar fixed="top" className="NavbarColor" variant="dark">
    <Container>
      <Navbar.Brand><Link to="/" className="link2">
      <Logo> <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block"
          />{' '}
       <span className="NavbarTitulo">TechnoCraft</span></Logo></Link> 
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="#action2">Arma tu PC</Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown">
            <NavDropdown.Item> <Link to="/"className="link">Todos</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item ><Link to="/category/Mother"className="link">Mothers</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/category/Memoria RAM"className="link">Memorias RAM</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/category/Almacenamiento"className="link">Procesadores</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/category/Placa de video"className="link">Placas de video</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/category/Procesador"className="link">Procesadores</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link to="/category/Gabinete"className="link">Gabinetes</Link></NavDropdown.Item>
          </NavDropdown>
          <SearchContainer>
                <Input/>
                <SearchIcon className="IconoBusq" onClick={()=> alert("Usted quiso buscar algo...pero todavia no esta programado :)")}/>
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