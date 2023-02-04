import GameProvider from "@/contexts/game";
import PopupProvider from "@/contexts/popup";
import UserProvider from "@/contexts/users";

type Props = {
  children: JSX.Element;
};
const Context = ({ children }: Props) => (
  <UserProvider>
    <GameProvider>
      <PopupProvider>{children}</PopupProvider>
    </GameProvider>
  </UserProvider>
);
export default Context;
