import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Product from "./components/Product/Product";
import productsList from "./../data/products";
import "./App.css";

function App() {

  return (
    <div className="store">
      <BreadCrumb/>

      <section className="products">
        {productsList.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}

export default App;
