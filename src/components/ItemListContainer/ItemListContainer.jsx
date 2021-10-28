import {useEffect, useState} from 'react';
import GetFetchList from '../../services/GetFetchList';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        GetFetchList
        .then(response => {        
            setProduct(response)
        })
        .catch (error => console.log(error))
    },[])   

    return (
            <div className="list-container">
                <h1 className ="titulo">Plataforma Virtual</h1>
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer