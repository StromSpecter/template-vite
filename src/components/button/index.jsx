import React from "react";
import { twMerge } from "tailwind-merge";
import { FiLoader } from "react-icons/fi";

const Button = ({
  children,
  variant = "fill", // fill | outline
  disabled = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  isLoading = false,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200";

  const variantStyle = {
    fill: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300",
  };

  const finalClass = twMerge(
    baseStyle,
    variantStyle[variant],
    disabled || isLoading ? "cursor-not-allowed opacity-70" : "",
    className
  );

  return (
    <button className={finalClass} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <FiLoader className="animate-spin" />
      ) : (
        <>
          {LeftIcon && <LeftIcon className="w-4 h-4" />}
          {children}
          {RightIcon && <RightIcon className="w-4 h-4" />}
        </>
      )}
    </button>
  );
};

export default Button;
