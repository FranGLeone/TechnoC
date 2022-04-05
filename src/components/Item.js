import {Card} from "react-bootstrap"
import ItemCount from "./ItemCount";

const Item =({id,name,stock,price,thumbnail}) =>{
    return(
        <Card className="CardProductos" key={id} style={{ width: '18rem' }}>
            <Card.Img className="imgCard" variant="top" src={thumbnail} />
            <Card.Body>
                <div className="CardProductos"><Card.Title>{name}</Card.Title>
                <hr></hr>
                </div>
                <Card.Title>${price}</Card.Title>
                <br></br>
                <Card.Text>
                    <br></br>
                    <ItemCount/>
                    <br></br>
                </Card.Text>
                 
                <Card.Text><h6 className="center">{stock} unidades disponibles</h6></Card.Text>
                
                 
            </Card.Body>
        </Card>
    )
}


export default Item;