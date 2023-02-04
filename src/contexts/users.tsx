import { createContext, useCallback, useEffect, useState } from "react";

import { IUser } from "@/models/user.model";

import { usersDefault } from "@/assets/constants/init";

interface context extends IUser {
  changeUser(): void;
  setFirstPlayer(): void;
}

export const UserContext = createContext({} as context);

type Props = {
  children: JSX.Element;
};
const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState(usersDefault);

  const changeUser = useCallback(
    () =>
      setUsers(() =>
        (users as IUser[]).map((u) => ({
          ...u,
          isCurrent: !u.isCurrent,
        }))
      ),
    [setUsers]
  );

  const setFirstPlayer = () => {
    const index = Math.random() < 0.5 ? 0 : 1;
    setUsers((users) =>
      users.map((u, i) => (i !== index ? u : { ...u, isCurrent: true }))
    );
  };

  useEffect(() => {
    setFirstPlayer();
  }, []);

  const currentUser =
    (users as IUser[]).find((u) => u.isCurrent) || ({} as IUser);

  console.log("currentUser ---->", currentUser);
  const context = {
    ...currentUser,
    changeUser,
    setFirstPlayer,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
