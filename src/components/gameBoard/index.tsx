import { useContext } from "react";

import { GameContext } from "@/contexts/game";
import { PopupContext } from "@/contexts/popup";

import BoardBlock from "../boardBlock";
import PopUp from "../popup";

const GameBoard = () => {
  const { blocks, clickBlock } = useContext(GameContext);
  const { isOpen } = useContext(PopupContext);

  const handleClick = (i: number) => () => {
    clickBlock(i);
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-max">
      {blocks.map((block, i) => (
        <BoardBlock key={i} {...block} handleClick={handleClick(i)} />
      ))}
      {isOpen && <PopUp />}
    </div>
  );
};

export default GameBoard;
