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
import Swal from 'sweetalert2';

const Cart=() =>{
  
    const context = useContext(CartContext);
    const createOrder = () => {
        const itemsForDB = context.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.priceItem,
          qty: item.qtyItem
        }));
    
        context.cartList.forEach(async (item) => {
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem)
          });
        });
    
        let order = {
          comprador: {
            nombre: "Alex Marin Mendez",
            email: "profeAlex@react.com",
            telefono: "1122334455"
          },
          total: context.calcTotal(),
          items: itemsForDB,
          date: serverTimestamp()
        };
        
        const createOrderInFirestore = async () => {
         
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
               
        createOrderInFirestore()
          .then(result => Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu orden ha sido creada.',
                    html: 'Por favor, toma nota del código de reserva: '+'<b>'+ result.id + '</b>',
                    showConfirmButton: true,

                    hideClass: {
                      popup: 'animate__animated animate__fadeOutRight'
                    }}
                  ))
          .catch(err => console.log(err));
      
        context.removeAllItems();
      
      }
    
    return(
        <>
        <Container className='minheight'>
            <BtnVaciarCarrito>
            <Link to="/" className="FlechaBack"> <ArrowBackIosIcon/> Volver al catálogo </Link>
            
            {
                (context.cartList.length > 0)
                ? <button className='waves-effect waves-light btn blue' onClick={()=>{Swal.fire({
                                                                                      title: '¿Eliminar todos los items del carrito?',
                                                                                      icon: 'warning',
                                                                                      showCancelButton: true,
                                                                                      confirmButtonColor: '#3085d6',
                                                                                      cancelButtonColor: '#d33',
                                                                                      confirmButtonText: 'Aceptar',
                                                                                      cancelButtonText: 'Cancelar',
                                                                                      hideClass: {
                                                                                        popup: 'animate__animated animate__fadeOut'
                                                                                                },
                                                                                  }).then((res)=>{
                                                                                    if (res.isConfirmed){context.removeAllItems()}
                                                                                })}}> 
                  VACIAR CARRITO</button>
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
                            <DeleteForeverSharpIcon cursor="pointer" fontSize='large' onClick={() =>{Swal.fire({
                                                                                      title: '¿Quitar item de tu carrito?',
                                                                                      icon: 'question',
                                                                                      showCancelButton: true,
                                                                                      confirmButtonColor: '#3085d6',
                                                                                      cancelButtonColor: '#d33',
                                                                                      confirmButtonText: 'Quitar',
                                                                                      cancelButtonText: 'Cancelar',
                                                                                      hideClass: {
                                                                                        popup: 'animate__animated animate__fadeOut'
                                                                                                },
                                                                              }).then((res)=>{
                                                                                if (res.isConfirmed){context.deleteItem(item.idItem)}
                                                                            }) }}/>             
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
                <button className="waves-effect waves-light btn green" onClick={()=>{Swal.fire({
                                                                                      title: '¿Quieres finalizar tu compra?',
                                                                                      text: "¡Aprovecha los descuentos del mes de mayo!",
                                                                                      icon: 'warning',
                                                                                      showCancelButton: true,
                                                                                      confirmButtonColor: '#3085d6',
                                                                                      cancelButtonColor: '#d33',
                                                                                      confirmButtonText: 'Finalizar compra',
                                                                                      cancelButtonText: 'Seguir comprando',
                                                                                      showClass: {
                                                                                        popup: 'animate__animated animate__fadeInLeft'
                                                                                                },
                                                                              }).then((res)=>{
                                                                                if (res.isConfirmed){createOrder()}
                                                                              })}}>
                Finalizar Compra
                </button>
                </div>
            </ResumenCarrito>
            }
           
        </Container>
        
        </>
    )
}

export default Cart;