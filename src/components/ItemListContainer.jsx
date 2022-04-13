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
    customFetch(3000,Products)
      .then(res =>setItems(res))
      .catch(err=>console.log(err))
    }else{
      customFetch(1500,Products.filter(item=> item.type === idCategory))
      .then(res =>setItems(res))
      .catch(err=>console.log(err))
      
    }
    console.log(idCategory)
  },[idCategory])

  return(
    <Container className="hola"> 
      <Row className="DivProductos">
        <ItemList items={items}/>
      </Row>  

    </Container>   
  )
}


export default ItemListContainer;