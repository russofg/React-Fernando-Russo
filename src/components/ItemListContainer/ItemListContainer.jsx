import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirestore";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const { categoriaId } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();

    if (categoriaId) {
      const dataBaseCategoria = dataBase
        .collection("items")
        .where("categoria", "==", categoriaId)
        .get();
      dataBaseCategoria
        .then((response) =>
          setProduct(
            response.docs.map((items) => ({ id: items.id, ...items.data() }))
          )
        )
        .catch((error) => alert("Error ", error))
        .finally(() => setLoading(false));
    } else {
      const dataBaseCategoria = dataBase
        .collection("items")
        .orderBy("categoria")
        .get();

      dataBaseCategoria
        .then((response) =>
          setProduct(
            response.docs.map((items) => ({ id: items.id, ...items.data() }))
          )
        )
        .catch((error) => alert("Error:", error))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return (
    <div className="list-container">
      <h1 className="titulo">Plataforma Virtual</h1>

      {loading ? (
        <Spinner className="mt-5" animation="border" variant="primary" />
      ) : (
        <ItemList product={product} />
      )}
    </div>
  );
};

export default ItemListContainer;
