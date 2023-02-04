import { useState, useContext } from "react";

export type Props = {
  type?: string;
  id?: string;
  enabled?: boolean;
  isLink?: boolean;
  customClasses?: string;
  handleClick(): void;
  children: JSX.Element | string;
};
const Button = ({
  type = "primary",
  id = "",
  enabled = true,
  customClasses = "",
  handleClick,
  children,
}: Props) => {
  const enabledClass = (enabled && "cursor-pointer") || "";

  const onClick = () => {
    if (!enabled) return;

    handleClick();
  };

  return (
    <div
      id={id}
      className={`button ${enabledClass} ${customClasses}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
