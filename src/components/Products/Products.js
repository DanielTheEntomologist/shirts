import { useState, useEffect } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";
import { nanoid } from "nanoid";

const Products = () => {
  const [products, setProducts] = useState(productsData);

  // change the data on first mount to include key for each product
  useEffect(() => {
    setProducts(productsData.map((product) => ({ ...product, key: nanoid() })));
    // setProducts([...productsData, Products[0]]);
  }, []);

  return (
    <section>
      {products.map((product) => {
        return <Product {...product} />;
      })}
    </section>
  );
};

export default Products;
