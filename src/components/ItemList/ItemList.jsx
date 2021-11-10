import Item from "../Item/Item";
import './ItemList.css';
import { memo } from "react";

const ItemList = memo(({product}) => {
  
    
    return (
        <div className="charla-container"> {
          product.map(prod => <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}
)
export default ItemList