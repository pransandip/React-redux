import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./app/cart/Cart";
import Products from "./app/products/Products";
import { getCartItems } from "./store/slices/cart/cartSlice";

function App() {
  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  return (
    <div className="App">
      <button
        onClick={() => setShowCart(!showCart)}
        style={{ marginBottom: "10px" }}
      >
        Cart [ {items.length} ]
      </button>
      {showCart ? <Cart /> : <Products />}
    </div>
  );
}

export default App;
