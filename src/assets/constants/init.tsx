import { IBlock } from "@/models/block.model";
import { IUser } from "@/models/user.model";

export const blocksDefault: IBlock[] = [
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
  { value: "" },
];

export const usersDefault: IUser[] = [
  { name: "First", surname: "User", sign: "X", isCurrent: false },
  { name: "Second", surname: "User", sign: "O", isCurrent: false },
];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];