import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'; 

const ItemDetail = ({charla}) => {
    
    return (
            <div className="product-detail-card" >
                <img className="product-detail-img" src={charla.pictureUrl} alt={charla.title}/>
                <div>
                    <h5 className="product-detail-title">{charla.title}</h5>
                    <p className="product-detail-descripcion"><strong>Descripción</strong> {charla.descripcion}</p>
                    <h6 className="product-detail-speaker">Speaker: {charla.speaker}</h6>
                    <h6 className="product-detail-categoria">Categoria: {charla.categoria}</h6>
                    <h5 className="product-detail-price">$ {charla.price}</h5>
                </div>
                <ItemCount initial={1} stock={charla.stock}/>
            </div>
    )
}

export default ItemDetail