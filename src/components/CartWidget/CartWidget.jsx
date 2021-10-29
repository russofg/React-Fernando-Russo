import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className="navbar-cart"><Link to="/cart"><img src="assets/AddCart.png"  width="40"
        height="40"
        className="d-inline-block align-top"alt="Carrito"/></Link>
            
        </button>
    )
}

export default CartWidget