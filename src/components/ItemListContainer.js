import ItemList from "./ItemList";

import { useEffect, useState } from "react";
import customFetch from "../util/CustomFetch";
import { Container, Row} from "react-bootstrap";
const {Products}=require("../util/Products")

const ItemListContainer =()=>{
  const [items,setItems] = useState([])

  useEffect(()=>{
    customFetch(2000,Products)
      .then(res =>setItems(res))
      .catch(err=>console.log(err))
  },[])

  return(
    <Container > 
      <Row className="DivProductos">
        <ItemList items={items}/>
      </Row>  

    </Container>   
  )
}


export default ItemListContainer;