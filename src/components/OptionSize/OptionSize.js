import styles from "./OptionSize.module.scss";
import clsx from "clsx";

import PropTypes from "prop-types";

const OptionSize = ({ sizes, currentSize, updateSize }) => {
  return (
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
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  updateSize: PropTypes.func.isRequired,
};

export default OptionSize;
