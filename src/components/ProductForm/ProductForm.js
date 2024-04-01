import styles from "./ProductForm.module.scss";
import clsx from "clsx";
import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

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
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        updateSize={updateSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        updateColor={updateColor}
      />
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
