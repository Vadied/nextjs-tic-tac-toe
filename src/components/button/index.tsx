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
      className={`button ${enabledClass} ${customClasses} bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded mt-6`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
