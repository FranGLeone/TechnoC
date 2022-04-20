import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {BtnVaciarCarrito, Logo, DivCarrito, Product, ImgCarrito} from "./styledComponents"
import { Container} from "react-bootstrap";

const Cart=() =>{
    const context = useContext(CartContext);
    console.log(context.cartList)
    return(
        <>
        <Container className='general'>
            <BtnVaciarCarrito>
            <a href="/" className="FlechaBack"><ArrowBackIosIcon/>Volver al catálogo </a>
            
            {
                (context.cartList.length > 0)
                ? <button className='waves-effect waves-light btn blue' onClick={context.removeAllItems}>VACIAR CARRITO</button>
                : <Logo>Tu carrito está vacío!</Logo>
            }
            </BtnVaciarCarrito>
            <DivCarrito>
            {
                context.cartList.length > 0 &&
                    context.cartList.map(item=>
                        <>
                        <Product key={item.idItem}>
                            <ImgCarrito src={item.imgItem}/>
                            <div>{item.nameItem}</div>
                            <div>{item.priceItem}</div>

                        </Product>
                        </>
                        )
            }
            </DivCarrito>
            
        </Container>
        
        </>
    )
}

export default Cart;