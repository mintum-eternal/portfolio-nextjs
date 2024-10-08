"use client";
import { useEffect, useRef } from "react";
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
}: IButtonRoot) {
  const initClass = "rounded font-semibold";

  const buttonRef =
    useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.className = `${initClass} ${sizeClass[size]} ${renderVariantClass(colorScheme)[variant]}`;
    }
  }, [colorScheme, variant, size]);
  return (
    <button
      type={type}
      className="rounded font-semibold hover:brightness-75"
      ref={buttonRef}>
      {children}
    </button>
  );
}

export default Button;
