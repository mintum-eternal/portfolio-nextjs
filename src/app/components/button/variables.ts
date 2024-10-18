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

const colorVariantSolid: Record<
  IColorButton,
  string
> = {
  primary: "bg-primary text-white",
  success: "bg-success text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-black",
  info: "bg-info text-black",
  light: "bg-light text-white",
  dark: "bg-black text-white",
};
const colorVariantOutline: Record<
  IColorButton,
  string
> = {
  primary: "border-primary text-primary hover:bg-primary/10",
  success: "border-success text-success hover:bg-success/10",
  danger: "border-danger text-danger hover:bg-danger/10",
  warning: "border-warning text-warning hover:bg-warning/10",
  info: "border-info text-info hover:bg-info/10",
  light: "border-light text-light hover:bg-light/10",
  dark: "border-black text-black hover:bg-black/10",
};
const colorVariantLink: Record<
  IColorButton,
  string
> = {
  primary: "text-primary",
  success: "text-success",
  danger: "text-danger",
  warning: "text-warning",
  info: "text-info",
  light: "text-light",
  dark: "text-black",
};
const colorVariantGhost: Record<IColorButton, string> = {
  primary: "text-primary hover:bg-primary/10",
  success: "text-success hover:bg-success/10",
  danger: "text-danger hover:bg-danger/10",
  warning: "text-warning hover:bg-warning/10",
  info: "text-info hover:bg-info/10",
  light: "text-light hover:bg-light/10",
  dark: "text-black hover:bg-black/10",
}
export const renderVariantClass = (
  colorScheme: IColorButton
) => ({
  solid: `${colorVariantSolid[colorScheme]} hover:brightness-75`,
  outline: `border ${colorVariantOutline[colorScheme]} bg-transparent text-${colorScheme}`,
  link: `${colorVariantLink[colorScheme]} hover:underline`,
  ghost: `bg-transparent ${colorVariantGhost[colorScheme]}`,
});
