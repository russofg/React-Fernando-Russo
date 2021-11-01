import {useEffect, useState} from 'react';
import GetFetchList from '../../services/GetFetchList';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [charla, setCharla] = useState({})

    const { detalleId } = useParams();

    useEffect(() => {
        GetFetchList
        .then(response => {        
            setCharla(response.find(prod => prod.id === detalleId))
        })
        .catch (error => alert("Error ", error))
    },[detalleId])   

    return (
            <div className="detail-container">
                <h2 className ="detail-titulo">Detalle de las Charlas</h2>
                <ItemDetail charla={charla}/>
            </div>
    )
}

export default ItemDetailContainer