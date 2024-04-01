import { useState, useEffect } from "react";
import productsData from "../../data/products";
import Product from "../Product/Product";
import { nanoid } from "nanoid";

const Products = () => {
  const [products, setProducts] = useState(productsData);

  // apparently react will always render first then useEffect will run
  // so assigning keys to products in useEffect is too late to avoid the warning about missing keys
  // useEffect(() => {
  //   console.log("Products component assigned keys to products.");
  //   setProducts(productsData.map((product) => ({ ...product, key: nanoid() })));
  // }, []);

  return (
    <section>
      {products.map((product) => {
        return (
          <Product key={product.id} shirtName={product.name} {...product} />
        );
      })}
    </section>
  );
};

export default Products;
