import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import customFetch from "../util/CustomFetch";
import { Container, Row} from "react-bootstrap";
const {Products}=require("../util/Products")

const ItemListContainer =()=>{
  const [items,setItems] = useState([])
  const {idCategory} = useParams() 

  useEffect(()=>{
    if(idCategory==undefined){
    customFetch(2000,Products)
      .then(res =>setItems(res))
      .catch(err=>console.log(err))
    }else{
      customFetch(2000,Products.filter(item=> item.type === idCategory))
      .then(res =>setItems(res))
      .catch(err=>console.log(err))
      
    }
    console.log(idCategory)
  },[idCategory])

  return(
    <Container > 
      <Row className="DivProductos">
        <ItemList items={items}/>
      </Row>  

    </Container>   
  )
}


export default ItemListContainer;