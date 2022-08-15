import Cart from "./pages/Cart.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register";
import Home from "./pages/Home.js";
import ProductsList from "./pages/ProductsList.js";
import Product from "./pages/Product.js";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cartSlice.js";
import { useEffect } from "react";
import { Container } from "@mui/system";

function App() {
  const user = false;
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

 
  return (
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:cat" element={<ProductsList />} />
          <Route path="/products/:cat/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
     
  );
}

export default App;
