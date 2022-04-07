import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "materialize-css/dist/css/materialize.min.css";
import '../App.css';
import NavBar from '../components/NavBar'
import Footer from "../components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";


const Store=()=>{
    return(
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default Store;