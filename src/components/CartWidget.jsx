import 'materialize-css/dist/css/materialize.min.css';
import {Offcanvas,} from "react-bootstrap"
import { useState } from "react";


const CartWidget =() =>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
        <>
    <ul className="right hide-on-med-and-down">
        <li><a onClick={handleShow}><i className="large material-icons">shopping_cart</i></a></li>
        <span className="h6">5</span>
    </ul>
    <div>
   
    <Offcanvas placement="end" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Hola tutor/profe/alumnos, este es mi carrito :)
      </Offcanvas.Body>
    </Offcanvas>
    </div>
    </>
    )
}


export default CartWidget;