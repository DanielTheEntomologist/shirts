import styles from "./ProductForm.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";

import { useState } from "react";

import PropTypes from "prop-types";

const ProductForm = ({
  sizes,
  colors,
  currentColor,
  currentSize,
  updateSize,
  updateColor,
  submitOrder,
}) => {
  const colorClassMap = {
    blue: styles.colorBlue,
    red: styles.colorRed,
    white: styles.colorWhite,
    black: styles.colorBlack,
    green: styles.colorGreen,
  };

  return (
    <form onSubmit={submitOrder}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((size, index) => {
            return (
              <li key={index}>
                <button
                  type="button"
                  className={clsx(size.name === currentSize && styles.active)}
                  onClick={(e) => {
                    e.preventDefault();
                    updateSize(size.name, size.additionalPrice);
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    updateColor(color);
                  }}
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
  );
};

ProductForm.propTypes = {
  id: PropTypes.number,
  shirtName: PropTypes.string,
  title: PropTypes.string,
  basePrice: PropTypes.number,
  sizes: PropTypes.array,
  colors: PropTypes.array,
  image: PropTypes.string,
};

export default ProductForm;
