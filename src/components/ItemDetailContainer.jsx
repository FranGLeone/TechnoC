import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {firestoreFetchDetail} from "../util/FirestoreFetch";

const ItemDetailContainer =()=>{
    const [item,setItem] = useState([])
    const {idItem} = useParams();
  
    useEffect(()=>{
      firestoreFetchDetail(idItem) 
        .then(res =>setItem(res))
        .catch(err=>console.log(err))
    },[])
  
    return(
          
          <ItemDetail item={item}/>       
    )
  }
  
  
  export default ItemDetailContainer;