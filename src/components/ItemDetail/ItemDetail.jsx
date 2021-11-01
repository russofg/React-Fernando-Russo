import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({charla}) => {
    
    return (
            <div className="product-detail-card" >
                <img className="product-detail-img" src={charla.pictureUrl} alt={charla.title}/>
                <div>
                    <h5 className="product-detail-title">{charla.title}</h5>
                    <h6 className="product-detail-categoria">{charla.categoria}</h6>
                    <p className="product-detail-description">{charla.description}</p>
                    <h5 className="product-detail-price">$ {charla.price}</h5>
                </div>
                <ItemCount initial={1} stock={charla.stock}/>
            </div>
    )
}

export default ItemDetail