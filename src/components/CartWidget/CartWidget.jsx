import { Link } from 'react-router-dom';
import {useCartContext} from '../../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {

    const {cartList} = useCartContext()

    return (
            <Link to="/cart" className="cartwidget-container">
            <button className="cartwidget">
                <p className="cartwidget-quantity">{cartList.length}</p>
                <img src="../../assets/AddCart.png"  width="40"
                height="40"
                className="d-inline-block align-top"alt="Carrito"/>
            </button>
            </Link>


    )
}

export default CartWidget