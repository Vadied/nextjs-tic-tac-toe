import { IBlock } from "@/models/block.model";

interface Props extends IBlock {
  handleClick(): void;
}
const BoardBlock = ({ value, handleClick }: Props) => {
  return (
    <div
      className="w-32 h-32 border border-gray-400 text-center text-4xl font-bold"
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default BoardBlock;
