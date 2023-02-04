import { useContext } from "react";

import { PopupContext } from "@/contexts/popup";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const PopUp = () => {
  const { title } = useContext(PopupContext);
  return (
    <div className={`popup fixed top-0 left-0 w-full h-full bg-gray-50 flex justify-center items-center`}>
      <div className="flex flex-col justify-center align-center p-4 bg-white">
        {title && <Header />}
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default PopUp;
