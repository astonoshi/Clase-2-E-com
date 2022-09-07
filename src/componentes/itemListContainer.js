<<<<<<< HEAD
=======
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList"
import promise from "../utils/promise";
import { data } from "../utils/data"
>>>>>>> fb14001af8fabb32e1c9bea8c443f4eef41c545d
import { useEffect, useState } from "react";
import promise from '../utils/promise';
import {data} from '../utils/data';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
<<<<<<< HEAD
        if (id) {
        promise(data.filter(item => item.categoryId == id))
            .then(result => setProducts(result))
=======
        promise(data)
            .then(res => setProducts(res))
>>>>>>> fb14001af8fabb32e1c9bea8c443f4eef41c545d
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
