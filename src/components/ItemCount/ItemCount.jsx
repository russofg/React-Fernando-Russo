import {useState} from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) =>{
    
        const [qty, setQty] = useState(initial);
        const [cambiarBotom, setCambiarBotom] = useState(false);
    
        const decreaseQty = () => {
            setQty(qty-1);     
        }   
        const increaseQty = () => {
            setQty(qty+1);     
        }
        const handlerOnAdd = () => {
            onAdd(qty);
            alert(`Agregaste ${qty} unidad(es) a tu carrito`);
            setCambiarBotom(true);
            }
    
    return (
        <div>
            <div className="counter-selectors">
                <button bg="dark" variant="dark " className="counter-buttom"onClick={decreaseQty} disabled={(qty<=initial) ? true : false}>-</button>
                <div className="counter-display">{qty}</div>
                <button className="counter-buttom" onClick={increaseQty} disabled={ (qty>=stock) ? true : false }>+</button>
            </div>
            {cambiarBotom 
            ? <Link to="/cart"><button className="purchase">Terminar compra</button></Link>
            : <button className="qty-add" onClick={handlerOnAdd}>Agregar al carrito</button>
            }
        </div>
    )
}

export default ItemCount