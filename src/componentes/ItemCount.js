import { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 0, onAdd}) => {
    const [cant, setCant] = useState(0);

    useEffect(() => {
        setCant(initial);
    }, [ initial ]);

    const subtract = () => {
        if (cant > initial) {
            setCant(cant-1);
        }
    }

    const add = () => {
        if (cant < stock){
            setCant(cant+1);
        }  
    }

    return (
        <>
            <div className="cont-button">
                <button onClick={subtract} className="btn-">-</button>
                <p className='quantity'>{cant}</p>
                <button onClick={add} className="btnplus">+</button>
                <button onClick={() => onAdd(cant)} className='btnAdd'>Add To Cart</button>

                {
                    stock && cant
                    ? <button className="btnCant" onClick={() => onAdd(cant)}>Add to Cart</button>
                    : <button className="Disabled" disabled>Add to Cart</button>
                    
                }

    
            </div>
        </>
    );
    
}

export default ItemCount;