import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({
  label,
  placeholder = "Enter text",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  inputClassName = "",
  disabled = false,
  error = "",
  ...props
}) => {
  const baseInputStyle =
    "w-full px-3 py-2 text-sm border rounded-md outline-none transition-all duration-200";
  const disabledStyle = disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "";
  const errorStyle = error ? "border-red-500 text-red-600" : "border-gray-300 focus:border-blue-500";

  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

      <div className="relative">
        {LeftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <LeftIcon className="w-4 h-4" />
          </span>
        )}
        <input
          type="text"
          className={twMerge(
            baseInputStyle,
            errorStyle,
            disabledStyle,
            LeftIcon && "pl-9",
            RightIcon && "pr-9",
            inputClassName
          )}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {RightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <RightIcon className="w-4 h-4" />
          </span>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
