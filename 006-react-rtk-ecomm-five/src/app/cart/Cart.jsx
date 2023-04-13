import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import {
  deleteCartItem,
  updateCartItem,
} from "../../store/slices/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleChange = (e, id) => {
    dispatch(updateCartItem({ id, change: { quantity: +e.target.value } }));
  };

  return (
    <div>
      <div>
        {items?.map((item) => (
          <div className="cart-item" key={item.title}>
            <img className="img-fluid" src={item.thumbnail} alt="" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={() => dispatch(deleteCartItem(item.id))}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <h1>
        Total:{items.reduce((acc, item) => item.price * item.quantity + acc, 0)}
      </h1>
    </div>
  );
};

export default Cart;
