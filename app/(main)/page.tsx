import Image from "next/image";

import "./_components/frosted-glass.css";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.png')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="relative flex flex-col flex-1 justify-center items-center space-y-2 p-10 z-10">
        <div className="flex flex-row items-center w-full h-64 frosted-glass-card p-10">
          <div>
            <Image />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
