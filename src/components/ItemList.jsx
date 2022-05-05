import Item from "./Item"
import { Cargando} from './styledComponents';

const ItemList =({items})=>{
    return(       
        <>
        {          
            items.length>0
            ? items.map(item=><Item id={item.id} name={item.name} stock={item.stock} price={item.price} thumbnail={item.thumbnail} />)
            :<Cargando><div className="Cargando">Cargando...</div></Cargando>
            }
        </>       
    )
}

export default ItemList;