import { ButtonHTMLAttributes } from "react";

export type IColorButton =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
export type IVariantButton =
  | "solid"
  | "outline"
  | "ghost"
  | "link";
export type ISizeButton = "xs" | "sm" | "md" | "lg";
export interface IButtonRoot
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  colorScheme?: IColorButton;
  variant?: IVariantButton;
  size?: ISizeButton;
}
