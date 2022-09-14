import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
const test = useContext(CartContext);

    const onAdd = (cant) => {
        alert("You have added " + cant + " " + item.name + " to the cart.");
        test.addItem(item , cant);
    }

    return (
        <>
        
        
            <div className="card-big">
                <div className="content-img">
                    <img src={item.image} className="img-card-big" alt="" />
                </div>
                <div className="card-desc-big">
                    <h3>{item.name}</h3>
                    <div className="price">
                        <p className="secondPrice">{item.price}</p>
                    </div>
                    <p>{item.description}</p>
                    <p><strong>Stock: </strong>{item.stock}</p>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                    {
                        ItemCount === 0
                            ? <ItemCount stock={item.stock} initial={ItemCount} onAdd={onAdd} />
                            : <Link to="/cart"><button className="btnCheckOut">CheckOut</button></Link>
                    }
                

                </div>
            </div>
        </>

    )
}
export default ItemDetail;