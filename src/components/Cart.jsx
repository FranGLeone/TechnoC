import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import {BtnVaciarCarrito, Logo, DivCarrito, Product, ImgCarrito, NameCarrito, PriceCarrito, DetallesCart} from "./styledComponents"
import { Container} from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Cart=() =>{
    const context = useContext(CartContext);
    console.log(context.cartList)
    return(
        <>
        <Container className='general'>
            <BtnVaciarCarrito>
            <a href="/" className="FlechaBack"> <ArrowBackIosIcon/> Volver al catálogo </a>
            
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
                            <div className='hola'>
                            <ImgCarrito src={item.imgItem}/>
                            <NameCarrito>{item.nameItem}</NameCarrito>
                            </div>
                            <DetallesCart>
                        
                            <div>{item.qtyItem} item(s) seleccionados</div>
                            <PriceCarrito> 
                                ${item.priceItem} c/u. <br />
                                ${context.totalPerItem(item.idItem)}
                            </PriceCarrito>
                           </DetallesCart>
                                
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