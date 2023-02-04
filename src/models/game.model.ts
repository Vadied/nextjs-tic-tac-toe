import { IBlock } from "./block.model";
import { IUser } from "./user.model";

export interface IGame {
    blocks: IBlock[];
    winner: IUser | null;
}