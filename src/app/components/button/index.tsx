import { IButtonRoot } from "./types";
import {
  renderVariantClass,
  sizeClass,
} from "./variables";

function Button({
  children,
  colorScheme = "primary",
  variant = "solid",
  size = "sm",
  type,
  ...other
}: IButtonRoot) {
  const initClass = "rounded font-semibold";

  return (
    <button
      {...other}
      type={type}
      className={`${
        other.className
          ? other.className + " "
          : ""
      }rounded duration-500 font-semibold ${initClass} ${
        sizeClass[size]
      } ${
        renderVariantClass(colorScheme)[variant]
      }`}>
      {children}
    </button>
  );
}

export default Button;
