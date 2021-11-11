import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({items}) => {
    
    return (
            <div className="product-card" >
                <Link to={`/detalle/${items.id}`}><img className="product-img" src={items.pictureUrl} alt={items.title}/></Link>
                <h3 className="product-title">{`${items.title} - ${items.categoria}`}</h3>
                <h5 className="product-price">$ {items.price}</h5>
                <Link to={`/detalle/${items.id}`} className="product-link">
                <button className="product-button">Detalle</button></Link>
            </div>

    )
}

export default Item