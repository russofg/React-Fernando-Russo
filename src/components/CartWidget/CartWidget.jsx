import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { sumaCantidad } = useCartContext();

  return (
    <Link to="/cart" className="cartwidget-container">
      <button className="cartwidget">
        {sumaCantidad === 0 ? (
          <p className="empty">Carrito Vacio</p>
        ) : (
          <>
            <p className="no-empty">{sumaCantidad}</p>
            <img
              src="../../assets/AddCart.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Carrito"
            />
          </>
        )}
      </button>
    </Link>
  );
};

export default CartWidget;
