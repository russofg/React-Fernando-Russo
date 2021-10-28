import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({initial, stock}) =>{
    
    const [counter, setCounter] = useState(initial);
    
    const handleClick = () => {
        if (counter < stock)
        setCounter((stock)=> stock + 1);
    }
    const handleClickmenos = () => {
        setCounter((stock)=> stock - 1);
        if (counter === 1)
        setCounter(counter)
    }
    const onAdd = () => {
        alert(`Agregaste ${counter} unidad(es) a tu carrito`);
    }
    
    return (
        <div>
            <div className="counter-selectors">
                <button bg="dark" variant="dark " className="counter-buttom"onClick={handleClickmenos} disabled={(counter<=initial) ? true : false}>-</button>
                <div className="counter-display">{counter}</div>
                <button className="counter-buttom" onClick={handleClick} disabled={ (counter>=stock) ? true : false }>+</button>
            </div>
            <button className="counter-add" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount