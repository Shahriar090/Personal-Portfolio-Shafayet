import React from "react";
import cn from "../utils/cn";
const Button = ({ className, variant, children }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "solid":
        return "btn-solid";
      case "outline":
        return "btn-outline";
      default:
        return "btn-outline";
    }
  };
  return (
    <button className={cn(getVariant(variant), className)}>{children}</button>
  );
};

export default Button;
