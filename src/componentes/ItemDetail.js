import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {


    const onAdd = (cant) => {
        alert("You have added " + cant + " " + item.name + " to the cart.");
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
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                </div>
            </div>
        </>

    )
}
export default ItemDetail;