import { FaMinus, FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const ItemCount = ({ stock = 0, initial = 0 }) => {
  const [counter, setCounter] = useState(0);
  const addProduct = () => {
    Swal.fire("You have added one product", "success");
  };

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const decrease = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="addCartContainer">
      <button className="addingBtn" onClick={increment}>
        <FaPlus />
      </button>
      < h4>{counter}</h4>
      <button className="addingBtn" onClick={decrease}>
        <FaMinus />
      </button>
      <button
        onClick={counter === 0 ? null : addProduct}
        className={`addCart ${counter === 0 ? "disabled" : ""}`}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;