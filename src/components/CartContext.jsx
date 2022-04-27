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

    const calcSubTotal = () => {
        let calcTotalPerItem = cartList.map(item => totalPerItem(item.idItem));
        return calcTotalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21;
    }
    
    const calcDiscount = ()=>{
        return (calcSubTotal() + calcTaxes()) * 0.15
    }

    const calcTotal = () => {
        return (calcSubTotal() + calcTaxes() - calcDiscount());
    }



    return(
        <CartContext.Provider value={{
            cartList,
            addItem,
            removeAllItems,
            calcItemsQty,
            deleteItem,
            totalPerItem,
            calcSubTotal,
            calcTaxes,
            calcDiscount,
            calcTotal,

            
            }}>
                {children}
        </CartContext.Provider> 
       
    )
}

export default CartContextProvider;