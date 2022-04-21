import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import {BtnVaciarCarrito, Logo, DivCarrito, Product, ImgCarrito, NameCarrito, PriceCarrito, QtyCarrito} from "./styledComponents"
import { Container} from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';



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
                            
                            <ImgCarrito src={item.imgItem}/>
                            <NameCarrito>{item.nameItem}</NameCarrito>
                            
                            
                            
                            <QtyCarrito>{item.qtyItem} item(s) seleccionados</QtyCarrito>
                            <PriceCarrito> 
                                ${item.priceItem} c/u. <br />
                                ${context.totalPerItem(item.idItem)} total
                            </PriceCarrito>
                            <DeleteForeverSharpIcon cursor="pointer" fontSize='large' onClick={() => context.deleteItem(item.idItem)}/>
                            
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