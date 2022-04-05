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
        <button onClick={decrement} className="waves-effect waves-light btn">-</button>
        {item}
        <button onClick={increment} className="waves-effect waves-light btn">+</button>
        </div>
        <br></br>
        <br></br>
        
        <div className="center"><button className="waves-effect waves-light btn" onClick={()=>alert("hola")}>Agregar al carrito</button>    </div> 
        </>
    )
}

export default ItemCount;