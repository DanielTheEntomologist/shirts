import styles from "./ProductImage.module.scss";

import PropTypes from "prop-types";

const ProductImage = ({ shirtName, title, color }) => {
  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${shirtName}--${color}.jpg`}
      />
    </div>
  );
};

ProductImage.propTypes = {
  shirtName: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
};

export default ProductImage;
