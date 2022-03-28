import 'materialize-css/dist/css/materialize.min.css';
import CartWidget from './CartWidget';

const NavBar = () =>{
    return(
        <header>
          <div className="navbar-fixed">
          <nav>  
            <div className="nav-wrapper  teal lighten-2">
              <a href="#!" className="brand-logo center"><h4>TechnoCraft</h4></a>
              <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
              <ul className="left hide-on-med-and-down">
                <li><a href="">Inicio</a></li>
                <li><a href="">Contacto</a></li>
                <li className="active"><a href="">Tienda</a></li>
              </ul>
              <CartWidget/>
            </div>   
          </nav>
          <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          </div>
        </header>
    )
    
};

export default NavBar;