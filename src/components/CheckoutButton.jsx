import {Link} from "react-router-dom"

const CheckoutButton=()=>{
    return(

    <>
    <div className="hola">
        <Link to="/Cart" className="center"><button className="waves-effect waves-light btn blue">Ir al carrito</button></Link>
    </div>
    </>
    
    )
}

export default CheckoutButton;