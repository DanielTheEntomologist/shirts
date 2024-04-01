import styles from "./Product.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

import { useState } from "react";

import PropTypes from "prop-types";

const Product = ({ id, shirtName, title, basePrice, sizes, colors, image }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${shirtName}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size, index) => {
                return (
                  <li key={index}>
                    <button
                      type="button"
                      className={clsx(
                        size.name === currentSize && styles.active
                      )}
                    >
                      {size.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color, index) => {
                return (
                  <li key={index}>
                    <button
                      type="button"
                      className={clsx(
                        colorClassMap[color],
                        color === currentColor && styles.active
                      )}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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
