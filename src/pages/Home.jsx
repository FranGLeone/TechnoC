import 'bootstrap/dist/css/bootstrap.min.css';
import "materialize-css/dist/css/materialize.min.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import '../App.css';
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer";
import Cart from '../components/Cart';



const Home=()=>{
    return(
        <>
        <BrowserRouter>
            <NavBar/>
            
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
                <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default Home;