import Context from "@/components/context";
import Header from "@/components/header";
import GameBoard from "@/components/gameBoard";

const Home = () => {
  return (
    <Context>
      <main className="h-full flex flex-col items-center justify-center">
        <div>
          <Header />
          <GameBoard />
        </div>
      </main>
    </Context>
  );
};

export default Home;
