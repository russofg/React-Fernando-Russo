import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({product}) => {
    
    return (
        <div className="product-container">
            {product.map(prod => <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}

export default ItemList