import { createContext, useState } from "react";

import { IPopup } from "@/models/popup.model";

interface context extends IPopup {
  isOpen: boolean;
  closePopup(): void;
  openPopup(popup: IPopup): void;
}

export const PopupContext = createContext({} as context);

type Props = {
  children: JSX.Element;
};
const PopupProvider = ({ children }: Props) => {
  const [popup, setPopup] = useState({} as IPopup);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (popup: IPopup) => {
    setPopup(popup);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const context = { ...popup, isOpen, closePopup, openPopup };

  return (
    <PopupContext.Provider value={context}>{children}</PopupContext.Provider>
  );
};

export default PopupProvider;
