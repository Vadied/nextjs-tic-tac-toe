import { useContext } from "react";

import { PopupContext } from "@/contexts/popup";

import useTranslation from "@/hooks/useTranslation";

const Header = () => {
    const { t } = useTranslation();
    const { title } = useContext(PopupContext);
    return <div className="text-lg font-medium text-gray-900">{t(title)}</div>;
};

export default Header;
