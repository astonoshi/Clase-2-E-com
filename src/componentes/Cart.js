
import { useContext } from 'react';
import { CartContext } from './CartContext';


const Cart = () => {

  const test = useContext(CartContext);



  return (


    <>
      <div class="cartContainer">

        <div class="cartDetail">



          <div class="flex-item">
            {
              test.cartList.map(item =>
                <>
                  <h2 className='cartName'>{item.name}</h2>
                  <img class="cartImg" src={item.image} alt="" />
                  <p className="cartPrice" > Price : {item.price} </p>
                  <p className="cartQuantity">Quantity : {item.quantity} </p>
                  
                  

                  <buttom className="btnRemove" onClick={() => test.removeItem(item.id)}>Remove Product</buttom>
                  <button className="btnClearAll" onClick={test.clear}>Remove all Products</button>
                  <div><hr /></div>
                </>

              )

            }</div>
          <div class="flex-item">
            <hr />
          </div>
        </div>
      </div>
    </>
  )
}





export default Cart;