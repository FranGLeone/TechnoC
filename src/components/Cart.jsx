import { useContext} from 'react';
import { CartContext } from './CartContext';
import {BtnVaciarCarrito, Logo, Product, ImgCarrito, NameCarrito, PriceCarrito, QtyCarrito, ResumenCarrito,ItemResumen, TituloResumen, TotalResumen} from "./styledComponents"
import { Container} from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import {Link} from "react-router-dom"
import FormatNumber from '../util/FormatNumber';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../util/FirebaseConfig";

const Cart=() =>{
    const context = useContext(CartContext);
    console.log(context.cartList)
    
    return(
        <>
        <Container className='minheight'>
            <BtnVaciarCarrito>
            <Link to="/" className="FlechaBack"> <ArrowBackIosIcon/> Volver al catálogo </Link>
            
            {
                (context.cartList.length > 0)
                ? <button className='waves-effect waves-light btn blue' onClick={context.removeAllItems}>VACIAR CARRITO</button>
                : <Logo>Tu carrito está vacío!</Logo>
            }
            </BtnVaciarCarrito>
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
            )}
            
        </Container>
        <Container className='ResumenCompra'>
            {
                context.cartList.length > 0 &&
                <ResumenCarrito>
                <TituloResumen> 
                    <span>Resumen de compra</span>
                </TituloResumen>
                <ItemResumen>
                    Subtotal: <FormatNumber number={context.calcSubTotal()}/>
                </ItemResumen>
                <ItemResumen>
                    Impuestos (IVA 21%): <FormatNumber number={context.calcTaxes()}/>
                </ItemResumen>
                <ItemResumen>
                    Descuento especial (Mayo): <FormatNumber number={context.calcDiscount()}/>
                </ItemResumen>
                <hr />
                <TotalResumen>
                    Total: <FormatNumber number={context.calcTotal()}/>
                </TotalResumen>
                <hr />
                <div className='center'>
                <a href="/"><button className="waves-effect waves-light btn green" onClick={<Link to={"/"}></Link>}>Finalizar Compra</button></a>
                </div>
            </ResumenCarrito>
            }
           
        </Container>
        
        </>
    )
}

export default Cart;