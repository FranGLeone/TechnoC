import Item from "./Item"

const ItemList =({items})=>{
    return(
        
        <>
        {
            
            items.length>0
            ? items.map(item=><Item id={item.id} name={item.name} stock={item.stock} price={item.price} thumbnail={item.thumbnail} />)
            :<p>Loading...</p>
            }
        </>       
    )
}

export default ItemList;