import { useEffect, useState } from "react";
import promise from '../utils/promise';
import {data} from '../utils/data';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
        promise(data.filter(item => item.categoryId == id))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } else {
        promise(data)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }
    }, [id]);
    
    return(
        <>
            <section>
                <h1 className="greet">{props.greeting}</h1>  
                <div className="cards-content">
                    <ItemList items={products} />
                </div>
            </section>
        </>
    );
}

export default ItemListContainer;