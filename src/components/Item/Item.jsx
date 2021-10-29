import ItemCount from '../ItemCount/ItemCount';
import './Item.css'; 

const Item = ({prod}) => {
    
    return (
            <div className="product-card" >
                <img className="product-img" src={prod.pictureUrl} alt={prod.title}/>
                <h3 className="product-title">{`${prod.title} - ${prod.categoria}`}</h3>
                <h5 className="product-price">$ {prod.price}</h5>
                <button className="product-button">Detalle</button>
                <ItemCount initial={1} stock={prod.stock}/>
            </div>

    )
}

export default Item