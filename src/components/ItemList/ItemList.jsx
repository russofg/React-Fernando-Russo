import Item from "../Item/Item";
import './ItemList.css';
import { memo } from "react";

const ItemList = memo(({product}) => {
  
    
    return (
        <div className="charla-container"> {
          product.map(items => <Item key={items.id} items={items}/>
            )}
        </div>
    )
}
)
export default ItemList