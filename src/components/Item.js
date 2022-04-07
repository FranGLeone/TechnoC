import {Card} from "react-bootstrap"


const Item =({id,name,stock,price,thumbnail}) =>{
    return(
        <Card className="DivProductos" key={id} style={{ width: '18rem' }}>
            <Card.Img className="imgCard" variant="top" src={thumbnail} />
            <Card.Body>
                <div className="CardProductos"><Card.Title>{name}</Card.Title>
                <hr></hr>
                </div>
                <Card.Title>${price}</Card.Title>
                <br></br>
                <Card.Text>
                    <br></br>
                    
                    <br></br>
                </Card.Text>
                 
                <Card.Text><h6 className="center">{stock} unidades disponibles</h6></Card.Text>
                
                 
            </Card.Body>
        </Card>
    )
}


export default Item;