import 'materialize-css/dist/css/materialize.min.css';

const CartWidget =() =>{
    return(
    <ul className="right hide-on-med-and-down">
        <li><a href="/Cart"><i className="large material-icons">shopping_cart</i></a></li>
        <span className="h6">5</span>
    </ul>
    )
}

export default CartWidget;