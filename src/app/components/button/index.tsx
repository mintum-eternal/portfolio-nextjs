import { IButtonRoot } from "./types";
import './index.scss'
function Button({
  children,
  colorScheme = "primary",
  variant = "solid",
  size = "sm",
  type,
  ...other
}: IButtonRoot) {

  return (
    <button
      {...other}
      type={type}
      onClick={!other.disabled ? other.onClick : undefined}
      className={`${
        other.className
          ? other.className + " "
          : ""
      } button button-${size} button-${variant}-${colorScheme}`}>
      {children}
    </button>
  );
}

export default Button;
