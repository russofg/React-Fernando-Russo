import { memo } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = memo(({ itemList }) => {
  return (
    <div className="charla-container">
      {" "}
      {itemList.map((items) => (
        <Item key={items.id} items={items} />
      ))}
    </div>
  );
});
export default ItemList;
