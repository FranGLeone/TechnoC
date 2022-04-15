import {useState, useEffect} from "react"

const ItemCount=({stock= 0, initial=1, onAdd})=>{

    const[count, setCount] = useState(0)
   

    useEffect(()=>{
        setCount(initial)
    },[]);

    const increment=()=>{
        if(count<stock){
            setCount(count+1)
        }

    }

    const decrement=()=>{
        if(count>initial+1){
            setCount(count-1)
        }

    }

    return(
        <>
        <div className="contador">
        <button onClick={decrement} className="waves-effect waves-light btn red">-</button>
        {count}
        <button onClick={increment} className="waves-effect waves-light btn green">+</button>
        <br></br>
        {
            stock && count
            ?<span ><button className="waves-effect waves-light btn blue" onClick={()=>onAdd(count)}>Agregar al carrito</button></span>
            :<span ><button className="waves-effect waves-light btn blue" disabled>Agregar al carrito</button></span>
        }
        </div>
       
        </>
    )
}

export default ItemCount;