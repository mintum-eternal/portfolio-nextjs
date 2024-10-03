"use client";
import {
  useEffect,
  useMemo,
  useRef,
} from "react";
import { IButtonRoot } from "./types";

function Button({
  children,
  colorScheme = "primary",
  variant = "solid",
  size = "sm",
  type,
}: IButtonRoot) {
  const sizeClass: Record<typeof size, string> =
    useMemo(() => {
      return {
        xs: "px-1 py-0 h-6 text-xs",
        sm: "px-2 py-0 h-8 text-sm",
        md: "px-3 py-0 h-10 text-md",
        lg: "px-4 py-0 h-12 text-lg",
      };
    }, []);
  const buttonRef =
    useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const btnClasses = buttonRef.current;
    if (btnClasses) {
      btnClasses.className = btnClasses.className + sizeClass[size];
      switch (variant) {
        case "solid":
          btnClasses.className =
            btnClasses.className +
            ` bg-${colorScheme} text-white`;
          break;
        case "outline":
          btnClasses.className =
            btnClasses.className +
            ` border border-${colorScheme} bg-transparent text-${colorScheme}`;
          break;
        default:
          break;
      }
    }
  }, [colorScheme, size, sizeClass, variant]);
  return (
    <button
      type={type}
      className="rounded font-semibold "
      ref={buttonRef}>
      {children}
    </button>
  );
}

export default Button;
