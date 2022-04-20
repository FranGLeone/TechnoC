import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider=(children)=>{
    const [cartList, setCartList] = useState();
    
    const addItem=(item,qty) =>{
        let found = cartList.find(prod => prod.idItem === item.id);
        if(found === undefined){
            setCartList([
                ...cartList,
                {
                    itemName: item.name
                }
            ])
        } else{
            
        }
    }

    return(
        <CartContext.Provider value={{cartList}}>
            {children}
        </CartContext.Provider> 
       
    )
}

export default CartContextProvider;