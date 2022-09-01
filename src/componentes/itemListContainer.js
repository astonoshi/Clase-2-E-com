import React, {useState, useEffect} from "react";
import promise from "../utils/promise";
import {data} from "../utils/data";
import ItemList from "./Item.List";


export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    promise(data)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  })

  return (
    <>
      <h1 >{props.greetings}</h1>
      <ItemList items={products} />
      </>
  );
}
