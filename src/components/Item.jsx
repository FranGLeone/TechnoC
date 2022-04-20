import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Name, Price} from "./styledComponents"
import Button from '@mui/material/Button';

const Item =({id,name,stock,price,thumbnail}) =>{
    return(
        <Card className="CardProductos" style={{ width: '18rem' }}>
            <Card.Img className="imgCard" variant="top" src={thumbnail}  />
            <Card.Body>
                <div><Card.Title><Name>{name}</Name></Card.Title>
                <hr></hr>
                </div>
                <Card.Title><Price>${price}</Price></Card.Title>
                <br></br>
                <Card.Text><h6 className="center">{stock} unidades disponibles</h6></Card.Text>
                 <br></br>
                 {
                     stock >= 1
                     ?<Card.Text><Link to={`/item/${id}`} className="center"><h6 className="Boton">Comprar</h6></Link></Card.Text>
                     :<Card.Text><Link to={`/item/${id}`} className="center"><h6 className="Boton2">Sin stock</h6></Link></Card.Text>
                 }
                 
            </Card.Body>
        </Card>
    )
}


export default Item;