import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

import { useState } from "react";

import PropTypes from "prop-types";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = ({ id, shirtName, title, basePrice, sizes, colors, image }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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

  const updateSize = function (sizeName, additionalPrice) {
    setCurrentSize(sizeName);
    setCurrentPrice(basePrice + additionalPrice);
  };

  const updateColor = function (color) {
    setCurrentColor(color);
  };

  const colorClassMap = {
    blue: styles.colorBlue,
    red: styles.colorRed,
    white: styles.colorWhite,
    black: styles.colorBlack,
    green: styles.colorGreen,
  };

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
