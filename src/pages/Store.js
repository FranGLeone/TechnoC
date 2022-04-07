import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "materialize-css/dist/css/materialize.min.css";
import '../App.css';
import NavBar from '../components/NavBar'
import Footer from "../components/Footer";



const Store=()=>{
    return(
        <>
        <NavBar/>
        <ItemDetailContainer/>
        <Footer/>
        </>
    )
}

export default Store;