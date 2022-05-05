import {useState, useEffect} from "react"
import Swal from 'sweetalert2';

const ItemCount=({stock= 0, initial=1, onAdd})=>{

    const[count, setCount] = useState(0)

    useEffect(()=>{
        setCount(initial)
    },[]);

    const increment=()=>{
        if(count<stock){
            setCount(count+1)
        }    }

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
            ?<span ><button className="waves-effect waves-light btn blue" onClick={()=>{Swal.fire({
                                                                                title: '¿Agregar producto al carrito?',
                                                                                icon: 'question',
                                                                                showCancelButton: true,
                                                                                confirmButtonColor: '#3085d6',
                                                                                cancelButtonColor: '#d33',
                                                                                confirmButtonText: 'Agregar producto',
                                                                                cancelButtonText: 'Cancelar',
                                                                                showClass: {
                                                                                popup: 'animate__animated animate__pulse'
                                                                                        },
        }).then((res)=>{
            if (res.isConfirmed){Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado con éxito',
                timer: 2000,
                showConfirmButton: false,
                hideClass: {
                    popup: 'animate__animated animate__fadeOutDown'
                            },
            
            }) && onAdd(count)}
          })
    
    
    }}>Agregar al carrito</button></span>
            :<span ><button className="waves-effect waves-light btn blue" disabled>Agregar al carrito</button></span>
        }
        </div>
       
        </>
    )
}

export default ItemCount;