import './CartWidget.css';

const CartWidget = () => {
    return (
        <button className="navbar-cart"><a href="/cart"><img src="assets/AddCart.png"  width="40"
        height="40"
        className="d-inline-block align-top"alt="Carrito"/></a>
            
        </button>
    )
}

export default CartWidget