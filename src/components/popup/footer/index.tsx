import { useContext, useCallback } from "react";

import { PopupContext } from "@/contexts/popup";

import useTranslation from "@/hooks/useTranslation";

import Button from "@/components/button";

const Footer = () => {
    const { t } = useTranslation();
    const { closeLabel, closePopup } = useContext(PopupContext);
    return (
        <div className="footer center-content">
                <Button handleClick={closePopup}>
                    {t(closeLabel || "button.close.label")}
                </Button>
        </div>
    );
};

export default Footer;
