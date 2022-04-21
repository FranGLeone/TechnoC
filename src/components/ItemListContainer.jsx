import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import customFetch from "../util/CustomFetch";
import { Container, Row} from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import db from "../util/FirebaseConfig"
import { async } from "@firebase/util";

const ItemListContainer =()=>{
  const [items,setItems] = useState([])
  const {idCategory} = useParams() 

  //componentDidUpdate
  useEffect(()=>{
    const fetchFromFirestore = async()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return dataFromFirestore;
  }
  fetchFromFirestore()
    .then(result=>setItems(result))
    .catch(err=> console.log(err));
  },[items])



  return(
    <Container> 
      <Row className="DivProductos">
        <ItemList items={items}/>
      </Row>  

    </Container>   
  )
}


export default ItemListContainer;