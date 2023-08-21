import React from "react";
import classNames from "classnames";
interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
  variant?: "primary" | "outline";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  children,
  classname,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const className = classNames(
    `w-[200px] h-14 rounded-[55px] flex justify-center items-center`,
    variant === "primary" && "bg-primary text-white",
    variant === "outline" && "border-primary border text-primary",
    classname
  );
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
