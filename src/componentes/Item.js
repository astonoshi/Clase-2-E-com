import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';


const Item = (props) => {

    const onAdd = (cant) => {
        alert("You have added " + cant + " " + props.name + " to the cart.");
    }

    return (
        <>
            <Link to={`/item/${props.id}`}><div className="card">
                <div className="content-img">
                    <img src={props.image} className="img-card" alt="" />
                </div>
                <div className="cardDescription">
                    <h3>{props.name}</h3>
                    <p>{props.price}</p>
                    <p><strong>Stock: </strong>{props.stock}</p>
                    <ItemCount stock={props.stock} initial={0} onAdd={onAdd}/>
                </div>
            </div>
            </Link>
        </>

    )
}
export default Item;





