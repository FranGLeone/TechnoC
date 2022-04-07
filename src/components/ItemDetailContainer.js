import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import customFetch from "../util/CustomFetch";
import { useParams } from "react-router-dom";
const {Products}=require("../util/Products");


const ItemDetailContainer =()=>{
    const [item,setItem] = useState([])
    const {idItem} = useParams();
  
    useEffect(()=>{
      customFetch(2000,Products.find(items=>items.id === parseInt(idItem)))  //find
        .then(res =>setItem(res))
        .catch(err=>console.log(err))
    },[])
  
    return(
      
          <ItemDetail item={item}/>
         
    )
  }
  
  
  export default ItemDetailContainer;