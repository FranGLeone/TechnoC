import { createContext } from "react"

export const CartContext = createContext();

const CartContextProvider=({children})=>{
    return(
        <CartContext.Provider value={[{id:1, name:"coder"}, {id:2, name :"house"}]}>
            {children}
        </CartContext.Provider>
       
    )
}

export default CartContextProvider;