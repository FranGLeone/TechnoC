import {useState} from "react"

const ItemCount=()=>{

    const[item, setItem] = useState(1)

    const increment=()=>{
        if(item<5){
            setItem(item+1)
        }

    }

    const decrement=()=>{
        if(item>1){
            setItem(item-1)
        }

    }

    return(
        <div>
        <a onClick={increment} class="waves-effect waves-light btn">+</a>
        <p>{item}</p>
        <a onClick={decrement} class="waves-effect waves-light btn">-</a>
        </div>
    )
}

export default ItemCount;