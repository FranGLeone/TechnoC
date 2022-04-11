import ItemCount from "./ItemCount";
import {Container,Row} from "react-bootstrap"


const ItemDetail =({item}) =>{


    return(
        <>
        {
            item
            ?
            <>
            
            <Container className="DivDetalles">
                <Row>
                    <div className="col-lg-5 ImgDetalles"><img src={item.thumbnail}></img></div>
                    <div className="col-lg-7 "><p className="Name">{item.name}</p>
                        <hr></hr>
                        <div className="Price">Precio: ${item.price}</div> 
                        <ItemCount/>
                        <br></br>
                        <div className="Stock">¡{item.stock} unidades disponibles!</div>
                        <div className="Desc">
                            <p className="Name">Caracteristicas Generales.</p>
                            <hr></hr>
                            <h6>{item.description}</h6>
                        </div>

                    
                        
                    </div>
                    
                </Row>
            </Container>
            </>
            : <p>Cargando...</p>
        }
        </>
    )
    
}


export default ItemDetail; 