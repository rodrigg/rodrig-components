import React from "react";
import { ButtonProps } from "./button.type";

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button type="button" onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default Button;
