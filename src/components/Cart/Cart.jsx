import "./Cart.css";
import {useCartContext} from '../../Context/CartContext';
import {Link} from "react-router-dom";


const Cart = () => {

  const {cartList, removeItem, removeCart} = useCartContext()

  return (
    <div className="cart">
      <h2>Cart</h2>
      
            {cartList.length
            ? <button className="remove-cart" onClick={() => removeCart()}>Vaciar carrito</button>
            : <div>
                <p className="empty-cart">El carrito está vacío</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
            }
            <div className="cart-container">
            {cartList.map(itemAdded => 
                <div className="item-added-card" key={itemAdded.charla.id} >
                    <img className="item-added-img" src={itemAdded.charla.pictureUrl} alt={itemAdded.charla.title}/>
                    <div className="item-added-info">
                        <h5 className="item-added-title">{itemAdded.charla.title}</h5>
                        <h6 className="item-added-speaker">Speaker: {itemAdded.charla.speaker}</h6>
                        <p className="item-added-description">{itemAdded.charla.description}</p>
                        <p className="item-added-price">$ {itemAdded.charla.price}</p>
                        <p className="item-added-quantity">Cantidad: {itemAdded.qty}</p>
                    </div>
                    <button className="remove-item" onClick={() => removeItem(itemAdded.charla.id)}>Eliminar producto</button>
                </div>
            )}  
            </div>       
        </div>

   
  );
}

export default Cart;