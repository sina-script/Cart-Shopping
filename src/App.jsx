import { useState } from "react";
import BreadCrumb from "./components/BreadCrumb/BreadCrumb";
import Product from "./components/Product/Product";

import "./App.css";

function App() {

  return (
    <div className="store">
      <BreadCrumb></BreadCrumb>
      <section>
        <Product></Product>
      </section>
    </div>
  );
}

export default App;
