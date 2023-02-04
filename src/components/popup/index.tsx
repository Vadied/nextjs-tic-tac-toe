import { useContext } from "react";

import { PopupContext } from "@/contexts/popup";

import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const PopUp = () => {
  const { title } = useContext(PopupContext);
  return (
    <div className={`popup center-content`}>
      <div className="panel">
        {title && <Header />}
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default PopUp;
