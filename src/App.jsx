import React from "react";
import { useState,useEffect } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart"



export default function App() {
  const [products, setProducts] = useState([]);
  const [activeCategory,setActiveCategory] = useState('all')
  const [cart,setCart] = useState([]);


  useEffect(() => {
      fetch('https://fakestoreapi.com/products/')
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error('Error fetching products:', error));
  }, []);

  //Category Based Filtering
  const handleCategoryChange = (category)=>setActiveCategory(category)


  const addToCart = (product) => {
    // Check if the product is already in the cart by comparing product IDs
    const isProductInCart = cart.some((item) => item.id === product.id);
    
    if (isProductInCart) {
        alert("This product is already in the cart.");
    } else {
        setCart((prevCart) => [...prevCart, product]);
    }
};

  const cartCount = cart.length
  
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== product.id));
};  

      return(
       
        <Router>
          <Navbar handleCategoryChange={handleCategoryChange} cartCount={cartCount}/>
           <Routes>
              <Route path='/' element={<ProductList products={products} activeCategory={activeCategory} addToCart={addToCart}/>}/>
              <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
          </Routes>
         </Router>
        )}

