import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ItemList from "./ItemList"
import promise from "../utils/promise";
import { data } from "../utils/data"
import { useEffect, useState } from "react";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        promise(data)
            .then(res => setProducts(res))
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="ItemListContainer">
            <Container>
                <Row>

                    <ItemList items={products} />

                </Row>
            </Container>
        </div>
    );
};

export default ItemListContainer;
