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
        <>
        <div className="contador">
        <button onClick={decrement} className="waves-effect waves-light btn red">-</button>
        {item}
        <button onClick={increment} className="waves-effect waves-light btn green">+</button>
        <br></br>
        <span className=""><button className="waves-effect waves-light btn blue">Agregar al carrito</button>    </span> 
        </div>
       
        </>
    )
}

export default ItemCount;