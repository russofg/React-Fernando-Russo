import {useEffect, useState} from 'react';
import GetFetchDetail from '../../services/GetFetchDetail';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const [charla, setCharla] = useState({})

    useEffect(() => {
        GetFetchDetail
        .then(response => {        
            setCharla(response)
        })
        .catch (error => console.log(error))
    },[])   

    return (
            <div className="detail-container">
                <h2 className ="detail-titulo">Detalle de las Charlas</h2>
                <ItemDetail charla={charla}/>
            </div>
    )
}

export default ItemDetailContainer