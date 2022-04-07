import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../util/CustomFetch";
import { Container, Row} from "react-bootstrap";
const {Products}=require("../util/Products");


const ItemDetailContainer =()=>{
    const [item,setItem] = useState([])
  
    useEffect(()=>{
      customFetch(2000,Products[10])
        .then(res =>setItem(res))
        .catch(err=>console.log(err))
    },[])
  
    return(
      
          <ItemDetail item={item}/>
         
    )
  }
  
  
  export default ItemDetailContainer;