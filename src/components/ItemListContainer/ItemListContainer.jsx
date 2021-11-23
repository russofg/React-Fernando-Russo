import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirestore";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    const dataBase = getFirestore();

    if (categoriaId) {
      const dataBaseCategoria = dataBase.collection("items").where("categoria", "==", categoriaId).get();

      dataBaseCategoria
        .then((response) =>setItemList(response.docs.map(items => ({ id: items.id, ...items.data() }))
          )
        )
        .catch((error) => alert("Error ", error))
        .finally(() => setLoading(false));
    } else {
      const dataBaseTotal = dataBase.collection("items").orderBy("categoria").get();

      dataBaseTotal
        .then((response) =>setItemList(response.docs.map(items => ({ id: items.id, ...items.data() }))
          )
        )
        .catch(error => alert("Error:", error))
        .finally(() => setLoading(false));
    }
  }, [categoriaId]);

  return (
    <div className="list-container">
      <h1 className="titulo">Plataforma Virtual</h1>

      {loading ? 
        <Spinner className="mt-5" animation="border" variant="primary" />
       : 
        <ItemList itemList={itemList} />
      }
    </div>
  );
};

export default ItemListContainer;
