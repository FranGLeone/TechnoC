import { useState } from "react";
import {Offcanvas, Button} from "react-bootstrap"

function Cart() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className="Cargando">
        <Button variant="primary" onClick={handleShow}>
          Carrito
        </Button>
  
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
    );
  }

  export default Cart;