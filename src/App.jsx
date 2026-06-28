import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Product from "./components/Product/Product";
import productsList from "./../data/products";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const mainProduct = productsList.find((product) => {
      return product.id == productId;
    });

    if (mainProduct) {
      setCart([...cart, mainProduct]);
    }
  };

  const removeFromCart=(productId)=>{
    const newCart=cart.filter((product)=>{
      return product.id!=productId
    })

    setCart(newCart);
  }

  return (
    <div className="store">
      <BreadCrumb />

      <section className="products">
        {productsList.map((product) => {
          return <Product key={product.id} {...product} addToCart={addToCart}/>;
        })}
      </section>

      <Navigation cart={cart} removeFromCart={removeFromCart}></Navigation>
    </div>
  );
}

export default App;
