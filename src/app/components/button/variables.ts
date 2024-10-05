import {
  IColorButton,
  ISizeButton,
} from "./types";

export const sizeClass: Record<
  ISizeButton,
  string
> = {
  xs: "px-1 py-0 h-6 text-xs",
  sm: "px-2 py-0 h-8 text-sm",
  md: "px-3 py-0 h-10 text-md",
  lg: "px-4 py-0 h-12 text-lg",
};

const colorVariantSolid: Record<IColorButton, string> = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    success: "bg-success text-white",
    danger: "bg-danger text-white",
    warning: "bg-warning text-black",
    info: "bg-info text-black",
    light: "bg-light text-white",
    dark: "bg-black text-white",
    link: "text-primary hover:underline"
}
export const renderVariantClass = (
  colorScheme: IColorButton
) => ({
  solid: `${colorVariantSolid[colorScheme]} duration-500 hover:brightness-75`,
  outline: `border border-${colorScheme} bg-transparent text-${colorScheme}`,
  link: "",
  ghost: "",
});
