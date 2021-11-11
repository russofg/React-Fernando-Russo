import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
//import GetFetchList from '../../services/GetFetchList';
import { getFirestore } from '../../services/getFirestore';
import ItemList from '../ItemList/ItemList';
import Spinner from 'react-bootstrap/Spinner';
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

        const dataBase = getFirestore() 

        if  (categoriaId) {
            // GetFetchList
            // .then(response => {        
            //     setProduct(response.filter(charla => charla.categoria === categoriaId))
            // })
            const dataBaseQuery = dataBase.collection("items").where("categoria", "==", categoriaId).get()

            dataBaseQuery
            .then(response => setProduct(response.docs.map(items => ({id:items.id, ...items.data()}))))
            
            

            .catch (error => alert("Error ", error))
            .finally(()=> setLoading(false))

        }else{
        //     GetFetchList
        //     .then(response => {        
        //         setProduct(response)
        //     })
        const dataBaseQuery = dataBase.collection("items").orderBy("categoria").get()

        dataBaseQuery
        .then(response => setProduct(response.docs.map(items => ({id:items.id, ...items.data()}))))
        .catch (error => alert("Error:", error))
        .finally(()=> setLoading(false))
        
        } 
        },[categoriaId])

         console.log(categoriaId);

    return (
            <div className="list-container">
                <h1 className ="titulo">Plataforma Virtual</h1>

                {loading ? <Spinner className='mt-5' animation="border" variant="primary" /> : <ItemList product={product} />}
            </div>
    )
}

export default ItemListContainer