import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import GetFetchList from '../../services/GetFetchList';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

const ItemListContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },1000);
    }, []);

    const {categoriaId} = useParams();


    useEffect(() => {

        if  (categoriaId) {
            GetFetchList
            .then(response => {        
                setProduct(response.filter(charla => charla.categoria === categoriaId))
            })
            .catch (error => alert("Error ", error))
            .finally(()=> setLoading(false))

        }else{
            GetFetchList
            .then(response => {        
                setProduct(response)
            })
            .catch (error => alert("Error ", error))
        } 
        },[categoriaId])

         console.log(categoriaId);

    return (
            <div className="list-container">
                <h1 className ="titulo">Plataforma Virtual</h1>
                <ItemList product={product}/>
            </div>
    )
}

export default ItemListContainer