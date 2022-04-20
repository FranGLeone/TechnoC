import 'materialize-css/dist/css/materialize.min.css';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';


const CartWidget =() =>{

    const context = useContext(CartContext);
  
    return(
        <>
          <ul className="right hide-on-med-and-down">
            
            <span className="QtyCarrito">{context.calcItemsQty()}</span>
          </ul>
        </>
    )
}


export default CartWidget;