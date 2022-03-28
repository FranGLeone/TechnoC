import 'materialize-css/dist/css/materialize.min.css';

const CartWidget =() =>{
    return(
    <ul className="right hide-on-med-and-down">
        <li><a href="sass.html"><i class="large material-icons">shopping_cart</i></a></li>
        <li className="flow-text">0</li>
    </ul>
    )
}

export default CartWidget;