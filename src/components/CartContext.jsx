import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider=({children})=>{
    const [cartList, setCartList] = useState([]);
    
    const addItem=(item,qty) =>{
        let found = cartList.find(prod => prod.idItem === item.id);
        if(found === undefined){
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.thumbnail,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                    
                }
            ])
        } else{
            found.qtyItem += qty;
            setCartList([...cartList])
        }
    }

    const removeAllItems =()=>{
        setCartList([]);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const deleteItem = (id) =>{
        let result = cartList.filter(item=> item.idItem != id);
        setCartList(result)
    }

    const totalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].qtyItem;
    }





    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeAllItems,
            calcItemsQty,
            deleteItem,
            totalPerItem,  
            
            }}>
                {children}
        </CartContext.Provider> 
       
    )
}

export default CartContextProvider;