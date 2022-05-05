import 'materialize-css/dist/css/materialize.min.css';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"



const CartWidget =() =>{

    const context = useContext(CartContext);
  
    return(
        <>
          <ul className="right hide-on-med-and-down">
            <li><Link to='/Cart'><ShoppingCartIcon fontSize='large'/></Link></li>
            <span className="QtyCarrito">{context.calcItemsQty()}</span>
          </ul>
        </>
    )
}


export default CartWidget;