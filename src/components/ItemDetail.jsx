import ItemCount from "./ItemCount";
import {Container,Row} from "react-bootstrap"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from "react";


const ItemDetail =({item}) =>{

    const [itemCount,setItemCount] =useState(0)
    const onAdd=(quantity) =>{
        alert("Seleccionaste " + quantity + " productos.")
        setItemCount(quantity)
    }



    return(
        <>
        {
            item && item.thumbnail
            ? 
            <Container className="DivDetalles">
                <Row>
                    <div>
                    <a href="/" className="FlechaBack"><ArrowBackIosIcon/>Volver al catálogo </a>
                    </div>
                    <div className="col-lg-5 ImgDetalles">
                        <img src={item.thumbnail} alt={item.name}></img>
                    </div>
                    <div className="col-lg-7 "><p className="Name">{item.name}</p>
                        <hr></hr>
                        <div className="Price">Precio: ${item.price}</div> 
                        {
                            itemCount=== 0
                            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                            :<p>hola</p>
                        }
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
            : <div className="Cargando">Cargando...</div>
        
        
        }

          
                  
        </>
    )
    
}
export default ItemDetail; 