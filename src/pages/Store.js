import ItemListContainer from "../components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "materialize-css/dist/css/materialize.min.css";
import '../App.css';
import NavBar from '../components/NavBar'


const Store=()=>{
    return(
        <>
        <NavBar/>
        <ItemListContainer/>
        </>
    )
}

export default Store;