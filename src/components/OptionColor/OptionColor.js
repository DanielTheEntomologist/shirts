import styles from "./OptionColor.module.scss";
import clsx from "clsx";

import PropTypes from "prop-types";

const OptionColor = ({ colors, currentColor, updateColor }) => {
  const colorClassMap = {
    blue: styles.colorBlue,
    red: styles.colorRed,
    white: styles.colorWhite,
    black: styles.colorBlack,
    green: styles.colorGreen,
  };

  return (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
};

export default OptionColor;
