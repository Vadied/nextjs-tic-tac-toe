import {
  createContext,
  useCallback,
  useContext,
  useState,
  useMemo,
} from "react";

import { IBlock } from "@/models/block.model";
import { IUser } from "@/models/user.model";

import { UserContext } from "./users";

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
  const { sign, changeUser, setFirstPlayer } = useContext(UserContext);

  const [blocks, setBlocks] = useState(blocksDefault);
  const [winner, setWinner] = useState<IUser | null>(null);

  const checkWinner = async (blocks: IBlock[]): Promise<IUser | null> => {
    try {
      const response = await fetch("/api/get-winner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ blocks }),
      });

      return response.json();
    } catch (err) {
      return null;
    }
  };

  const checkMoves = (blocks: IBlock[]) => {
    console.log(blocks)
    return blocks.some((b) => !b.value);
  }

  const handleChange = useCallback(async (blocks: IBlock[]) => {
    // fetch api to check if there is a winner
    const winner = await checkWinner(blocks);
    // console.log("winner ---->", winner)
    // if (!!winner) {
    //   return setWinner(winner as IUser);
    // }

    // if winner open modal to show who is the winner
    if (!checkMoves(blocks)) {
      return setWinner(null);
    }

    // if no winner but moves available keep going
    changeUser();
  }, []);

  const clickBlock = (index: number) => {
    const newBlocks = blocks.map((b, i) =>
      i !== index ? b : { ...b, value: sign }
    ) as IBlock[];

    setBlocks(newBlocks);
    handleChange(newBlocks);
  };

  const resetGame = () => {
    setFirstPlayer();
    setBlocks(blocksDefault)
    setWinner(null)
  }

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
