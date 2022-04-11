import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"


const Item =({id,name,stock,price,thumbnail}) =>{
    return(
        <Card className="DivProductos" style={{ width: '18rem' }}>
            <Card.Img className="imgCard" variant="top" src={thumbnail}  />
            <Card.Body>
                <div className="CardProductos"><Card.Title>{name}</Card.Title>
                <hr></hr>
                </div>
                <Card.Title>${price}</Card.Title>
                <br></br>
                <Card.Text><h6 className="center">{stock} unidades disponibles</h6></Card.Text>
                 <br></br>
                 <Card.Text><Link to={`/item/${id}`} className="center "><h6 className="boton">Comprar</h6></Link></Card.Text>
            </Card.Body>
        </Card>
    )
}


export default Item;