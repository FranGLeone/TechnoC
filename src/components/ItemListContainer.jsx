import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import db from "../util/FirebaseConfig"
import {firestoreFetchCategory} from "../util/FirestoreFetch"


const ItemListContainer =()=>{
  const [items,setItems] = useState([])
  const {idCategory} = useParams() 

  //componentDidUpdate
    useEffect(() => {
      firestoreFetchCategory(idCategory)
          .then(result => setItems(result))
          .catch(err => console.log(err));
  }, [idCategory]);

  //componentWillUnmount
  useEffect(() => {
      return (() => {
          setItems([]);
      })
  }, []);


  return(
    <Container> 
      <Row className="DivProductos">
        <ItemList items={items}/>
      </Row>  

    </Container>   
  )
}


export default ItemListContainer;