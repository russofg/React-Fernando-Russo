import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({prod}) => {
    
    return (
            <div className="product-card" >
                <Link to={`/detalle/${prod.id}`}><img className="product-img" src={prod.pictureUrl} alt={prod.title}/></Link>
                <h3 className="product-title">{`${prod.title} - ${prod.categoria}`}</h3>
                <h5 className="product-price">$ {prod.price}</h5>
                <Link to={`/detalle/${prod.id}`} className="product-link">
                <button className="product-button">Detalle</button></Link>
                <ItemCount initial={1} stock={prod.stock}/>
            </div>

    )
}

export default Item