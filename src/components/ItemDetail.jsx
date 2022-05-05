import ItemCount from "./ItemCount";
import {Container,Row} from "react-bootstrap";
import {Cargando} from './styledComponents';
import { useState, useContext } from "react";
import CheckoutButton from "./CheckoutButton";
import { CartContext } from "./CartContext";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link} from "react-router-dom"

const ItemDetail =({item}) =>{

    const [itemCount,setItemCount] =useState(0)
    const context = useContext(CartContext);

    const onAdd=(qty) =>{
        setItemCount(qty)
        context.addItem(item,qty);
    }

    return(
        <>
        {
            item && item.thumbnail
            ? 
            <Container className="DivDetalles">
                <Row>
                    <div>
                    <Link to="/" className="FlechaBack"> <ArrowBackIosIcon/> Volver al catálogo </Link>
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
                            :<CheckoutButton/>
                        }
                        <br></br>
                        
                        {
                            item.stock >= 1
                            ? <div className="Stock">¡{item.stock} unidades disponibles!</div>
                            : <div className="Stock">¡Sin stock! </div>
                        }
                        
                        <div className="Desc">
                            <p className="Name">Caracteristicas Generales.</p>
                            <hr></hr>
                            <div>
                                <h6>{item.description}</h6>
                            </div>
                        </div>    
                    </div>          
                </Row>
            </Container>
            :<Cargando className="Cargando">Cargando...</Cargando>      
        }                  
        </>
    )
    
}
export default ItemDetail; 