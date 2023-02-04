/* eslint-disable react/no-danger */
import { useContext } from "react";

import { PopupContext } from "@/contexts/popup";

import useTranslation from "@/hooks/useTranslation";

const Content = () => {
  const { t } = useTranslation();
  const { content } = useContext(PopupContext);

  return <div className="content">{t(content)}</div>;
};

export default Content;
