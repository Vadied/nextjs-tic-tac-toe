import type { NextApiRequest, NextApiResponse } from "next";

const checkCharacters = (
  values: string,
  p1: number,
  p2: number,
  p3: number
) => {
  const c1 = values.charAt(p1);
  if (c1 === "-") return false;

  const c2 = values.charAt(p2);
  if (c1 !== c2) return false;

  const c3 = values.charAt(p3);
  if (c1 === c3) return c1;

  return "";
};

const evaluateWinner = (values: string) => {
  return (
    checkCharacters(values, 0, 1, 2) || // check for 3-in-a-row horizontally
    checkCharacters(values, 3, 4, 5) ||
    checkCharacters(values, 6, 7, 8) ||
    checkCharacters(values, 0, 3, 6) || // check for 3-in-a-row vertically
    checkCharacters(values, 1, 4, 7) ||
    checkCharacters(values, 2, 5, 8) ||
    checkCharacters(values, 0, 4, 8) || // check for 3-in-a-row diagonally
    checkCharacters(values, 6, 4, 2)
  );
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get board state and currentPlayer
  const { values } = req.body;
  const winner = evaluateWinner(values);
  // If no winner return 404
  if (!winner) return res.status(404).json({ error: "no winner found" });

  // IF winner return 200 body {winner: "X"}
  res.status(200).json({ winner });
}
