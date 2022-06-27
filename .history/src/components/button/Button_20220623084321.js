import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`py-3 px-6 rounded-lg capitalize bg-primary w-full mt-auto ${bgClassName} mt-auto ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
