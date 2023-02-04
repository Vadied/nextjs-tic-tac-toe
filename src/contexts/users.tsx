import { createContext, useEffect, useState } from "react";

import { IUser } from "@/models/user.model";

import { usersDefault } from "@/assets/constants/init";

interface context extends IUser {
  users: IUser[];
  getWinner(s: string): IUser;
  changeUser(): void;
  setFirstPlayer(): void;
}

export const UserContext = createContext({} as context);

// SocketIO
// in this context we can use a socketIo instance to manage
// a multiplayer version

type Props = {
  children: JSX.Element;
};
const UserProvider = ({ children }: Props) => {
  const [users] = useState(usersDefault);
  const [current, setCurrent] = useState(0);

  const changeUser = () => {
    setCurrent((current) => (current === 0 ? 1 : 0));
  };

  const setFirstPlayer = () => {
    const index = Math.random() < 0.5 ? 0 : 1;
    setCurrent(index);
  };

  const getWinner = (winnerSign: string) => users.find((u) => u.sign === winnerSign) as IUser;

  useEffect(() => {
    setFirstPlayer();
  }, []);

  const context = {
    ...users[current],
    users,
    getWinner,
    changeUser,
    setFirstPlayer,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
