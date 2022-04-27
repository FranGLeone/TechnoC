import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
import {Name, Price} from "./styledComponents"


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
                {
                    stock > 1
                    ? <Card.Text><h6 className="center">{stock} unidades disponibles</h6></Card.Text>
                    : <Card.Text><h6 className="center">¡SIN STOCK!</h6></Card.Text>

                }
                
                 <br></br>
                 {
                     stock >= 1
                     ?<Card.Text><Link to={`/item/${id}`} className="center"><h6 className="Boton">Ver detalles</h6></Link></Card.Text>
                     :<Card.Text><Link to={`/item/${id}`} className="center"><h6 className="Boton2">Ver detalles</h6></Link></Card.Text>
                 }
                 
            </Card.Body>
        </Card>
    )
}


export default Item;