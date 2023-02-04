import { useContext } from "react";

import { UserContext } from "@/contexts/users";

import useTranslation from "@/hooks/useTranslation";

import Button from "../button";
import { GameContext } from "@/contexts/game";

const Header = () => {
  const { t } = useTranslation();

  const { name, surname } = useContext(UserContext);
  const { resetGame } = useContext(GameContext);

  return (
    <div className="w-full flex justify-between mb-4">
      <div>{t("header.player")}: {name} {surname}</div>
      <Button handleClick={resetGame}>{t("header.btn.reset")}</Button>
    </div>
  );
};

export default Header;
