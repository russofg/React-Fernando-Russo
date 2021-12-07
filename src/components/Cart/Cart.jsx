import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { getFirestore } from "../../services/getFirestore";
import { Link } from "react-router-dom";
import firebase from "firebase/";
import "firebase/firestore";
import UserForm from "../Form/Form";
import "./Cart.css";

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const { cartList, removeItem, removeCart, sumaTotal, userData } =
    useCartContext();

  const createOrder = () => {
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = userData;
    order.total = sumaTotal;
    order.items = cartList.map((product) => {
      const id = product.charla.id;
      const title = product.charla.title;
      const qty = product.qty;
      const price = product.charla.price * product.qty;
      return {
        id,
        title,
        qty,
        price,
      };
    });
    const dataBase = getFirestore();

    dataBase
      .collection("orders")
      .add(order)
      .then((response) => setOrderId(response.id))
      .catch((error) => alert("Error: ", error))
      .finally(() => removeCart());

    const updateStock = dataBase.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((response) => response.charla.id)
    );

    const batch = dataBase.batch();

    updateStock.get().then((collections) => {
      collections.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((items) => items.charla.id === docSnapshot.id).qty,
        });
      });

      batch.commit().catch((res) => alert("Error:", res));
    });
  };

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartList.length ? (
        <button className="remove-cart" onClick={() => removeCart()}>
          Vaciar carrito
        </button>
      ) : orderId === "" ? (
        <div>
          <p className="empty-cart">El carrito está vacío</p>
          <Link className="go-to-home" to="/">
            Empeza a comprar
          </Link>
        </div>
      ) : (
        <div>
          <p className="empty-cart">¡Gracias por tu compra!</p>
          <p className="order-id">Tu código de operación es: {orderId}</p>
          <Link className="go-to-home" to="/">
            Empeza a comprar
          </Link>
        </div>
      )}

      <div className="cart-container">
        {cartList.map((product) => (
          <div className="item-added-card" key={product.charla.id}>
            <img
              className="item-added-img"
              src={product.charla.pictureUrl}
              alt={product.charla.title}
            />
            <div className="item-added-info">
              <h5 className="item-added-title">{product.charla.title}</h5>
              <h6 className="item-added-speaker">
                Speaker: {product.charla.speaker}
              </h6>
              <p className="item-added-description">
                {product.charla.description}
              </p>
              <p className="item-added-price">$ {product.charla.price}</p>
              <p className="item-added-quantity">Cantidad: {product.qty}</p>
              <p className="item-added-quantity">
                Total: $ {product.qty * product.charla.price}
              </p>
            </div>
            <button
              className="remove-item"
              onClick={() => removeItem(product.charla.id)}
            >
              Eliminar producto
            </button>
          </div>
        ))}
      </div>
      <div className="total-container">
        <p className="item-added-total"> Total: $ {sumaTotal}</p>
      </div>

      <div className="user-form">
        <UserForm createOrder={createOrder} />
      </div>
    </div>
  );
};
export default Cart;
