import 'materialize-css/dist/css/materialize.min.css';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget =() =>{

    const context = useContext(CartContext);
  
    return(
        <>
          <ul className="right hide-on-med-and-down">
            <li><a href='/Cart'><ShoppingCartIcon fontSize='large'/></a></li>
            <span className="QtyCarrito">{context.calcItemsQty()}</span>
          </ul>
        </>
    )
}


export default CartWidget;