import GameProvider from "@/contexts/game";
import PopupProvider from "@/contexts/popup";
import UserProvider from "@/contexts/users";

type Props = {
  children: JSX.Element;
};
const Context = ({ children }: Props) => (
  <UserProvider>
    <PopupProvider>
      <GameProvider>{children}</GameProvider>
    </PopupProvider>
  </UserProvider>
);
export default Context;
