import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getFirestore } from "../../services/getFirestore";
import firebase from "firebase";
import "firebase/firestore";
import UserForm from "../Form/Form";
import "./Cart.css";

const Cart = () => {
  const [orderId, setOrderId] = useState("");
  const { cartList, removeItem, removeCart, precioTotal, userData } =
    useCartContext();

  const createOrder = (e) => {
    e.preventDefault();
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = userData;
    order.total = precioTotal();
    order.items = cartList.map((charlas) => {
        const id = charlas.id;
        const title = charlas.title;
        const qty = charlas.qty;
        const price = charlas.price * charlas.qty;
      return {
        id, title, qty, price,
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
      cartList.map((response) => response.id)
    );

    const batch = dataBase.batch();

    updateStock.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((items) => items.id === docSnapshot.id).qty,
        });
      });

      batch.commit().then((res) => alert("Error:", res));
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
            {" "}
            Empeza a comprar
          </Link>
        </div>
      ) : (
        <div>
          <p className="empty-cart">¡Gracias por tu compra!</p>
          <p className="order-id">Tu código de operación es: {orderId}</p>
          <Link className="go-to-home" to="/">
            {" "}
            Ir al inicio
          </Link>
        </div>
      )}

      <div className="cart-container">
        {cartList.map((itemAdded) => (
          <div className="item-added-card" key={itemAdded.charla.id}>
            <img
              className="item-added-img"
              src={itemAdded.charla.pictureUrl}
              alt={itemAdded.charla.title}
            />
            <div className="item-added-info">
              <h5 className="item-added-title">{itemAdded.charla.title}</h5>
              <h6 className="item-added-speaker">
                Speaker: {itemAdded.charla.speaker}
              </h6>
              <p className="item-added-description">
                {itemAdded.charla.description}
              </p>
              <p className="item-added-price">$ {itemAdded.charla.price}</p>
              <p className="item-added-quantity">Cantidad: {itemAdded.qty}</p>
              <p className="item-added-quantity">
                Total: $ {itemAdded.qty * itemAdded.charla.price}
              </p>
            </div>
            <button
              className="remove-item"
              onClick={() => removeItem(itemAdded.charla.id)}
            >
              Eliminar producto
            </button>
          </div>
        ))}
      </div>
      <div className="total-container">
        <p className="item-added-total"> Total: $ {precioTotal()}</p>
      </div>

      <div className="user-form">
        <UserForm createOrder={createOrder} />
      </div>
    </div>
  );
};
export default Cart;
