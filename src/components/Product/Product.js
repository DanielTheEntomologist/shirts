import styles from "./Product.module.scss";

import { useState, useCallback, useMemo } from "react";

import PropTypes from "prop-types";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = ({ id, shirtName, title, basePrice, sizes, colors, image }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const submitOrder = function (e) {
    e.preventDefault();
    console.log(
      `Order Summary:
      =================
      Name: ${title} 
      Price: ${currentPrice}
      Size: ${currentSize}
      Color: ${currentColor}
      =================`
    );
  };

  const price = useMemo(
    function () {
      const currentSizeData = sizes.find((size) => size.name === currentSize);
      setCurrentPrice(basePrice + currentSizeData.additionalPrice);
      return basePrice + currentSizeData.additionalPrice;
    },
    [basePrice, currentSize, sizes]
  );

  const updateSize = function (sizeName) {
    setCurrentSize(sizeName);
    setCurrentPrice(price);
  };

  const updateColor = useCallback(function (color) {
    setCurrentColor(color);
  }, []);

  return (
    <article className={styles.product}>
      <ProductImage title={title} shirtName={shirtName} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm
          {...{
            sizes,
            colors,
            currentColor,
            currentSize,
            updateSize,
            updateColor,
            submitOrder,
          }}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  shirtName: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  sizes: PropTypes.array,
  colors: PropTypes.array,
  image: PropTypes.string,
};

export default Product;
