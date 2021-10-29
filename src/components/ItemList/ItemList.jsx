import Item from "../Item/Item";
import './ItemList.css';
import Loading from '../Loader/Loading';
import {useEffect, useState} from 'react';

const ItemList = ({product}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },2000);
    }, []);

    return (
        <div className="charla-container">

            {
                loading
                ? <Loading />:
            
            product.map(prod => <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}

export default ItemList