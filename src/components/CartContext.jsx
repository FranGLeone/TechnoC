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
                    imgItem: item.thumbnail[0],
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                    
                }
            ])
        } else{
            found.qtyItem += qty;
        }
    }

    const removeAllItems =()=>{
        setCartList([]);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }





    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeAllItems,
            calcItemsQty          
            
            }}>
                {children}
        </CartContext.Provider> 
       
    )
}

export default CartContextProvider;