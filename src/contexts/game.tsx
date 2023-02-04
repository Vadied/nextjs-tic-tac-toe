import {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";

import { IBlock } from "@/models/block.model";

import { UserContext } from "./users";
import { PopupContext } from "./popup";

import { blocksDefault } from "@/assets/constants/init";

interface context {
  blocks: IBlock[];
  clickBlock(i: number): void;
  resetGame(): void;
}

export const GameContext = createContext({} as context);

type Props = {
  children: JSX.Element;
};
const GameProvider = ({ children }: Props) => {
  const { sign, getWinner, changeUser, setFirstPlayer } =
    useContext(UserContext);
  const { openPopup } = useContext(PopupContext);

  const [blocks, setBlocks] = useState(blocksDefault);
  const [isEnabled, setIsEnabled] = useState(true);

  const checkWinner = async (blocks: IBlock[]) => {
    const values = blocks.map((b) => b.value).join("");
    try {
      const response = await fetch("/api/get-winner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });

      return response.json();
    } catch (error) {
      return { error };
    }
  };

  const hasMoves = (blocks: IBlock[]) => blocks.some((b) => b.value === "-");

  const endGame = (winnerSign: string) => {
    setIsEnabled(false);

    if (!winnerSign)
      return openPopup({
        title: "Draw",
        content: ``,
      });

    const winner = getWinner(winnerSign);
    openPopup({
      title: "Winner",
      content: `${winner.name} ${winner.surname}`,
    });
  };

  const handleChange = useCallback(async (blocks: IBlock[]) => {
    // fetch api to check if there is a winner
    const result = await checkWinner(blocks);
    if (!result.error) return endGame(result.winner);

    // if winner open modal to show who is the winner
    if (!hasMoves(blocks)) return endGame("");

    // if no winner but moves available keep going
    changeUser();
  }, []);

  const clickBlock = (index: number) => {
    if (!isEnabled) return;

    const newBlocks = blocks.map((b, i) =>
      i !== index ? b : { ...b, value: sign }
    ) as IBlock[];

    setBlocks(newBlocks);
    handleChange(newBlocks);
  };

  const resetGame = () => {
    setFirstPlayer();
    setBlocks(blocksDefault);
    setIsEnabled(true);
  };

  const context = {
    blocks,
    clickBlock,
    resetGame,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};

export default GameProvider;
