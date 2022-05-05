import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container} from "react-bootstrap";

import {firestoreFetchCategory} from "../util/FirestoreFetch"


const ItemListContainer =()=>{
  const [items,setItems] = useState([])
  const {idCategory} = useParams() 

    useEffect(() => {
      firestoreFetchCategory(idCategory)
          .then(result => setItems(result))
          .catch(err => console.log(err));
  }, [idCategory]);

  useEffect(() => {
      return (() => {
          setItems([]);
      })
  }, []);

  return(
    <Container > 
        <div className="DivProductos">
        <ItemList items={items}/>
        </div>
      

    </Container>   
  )
}


export default ItemListContainer;