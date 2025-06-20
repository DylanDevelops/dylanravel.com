import "@/components/css/frosted-glass.css";

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import PortfolioInfo from "./_components/portfolio-info";
import About from "./_components/sections/about";
import Contact from "./_components/sections/contact";
import Hello from "./_components/sections/hello";
import Projects from "./_components/sections/projects";
import Skills from "./_components/sections/skills";

const MainPage = () => {
  return (
    <div className="relative w-screen min-h-screen flex flex-col p-0 m-0 bg-[#202020] bg-[url('/backgrounds/shapes.webp')] bg-repeat bg-[length:600px_600px]">
      <div className="absolute inset-0 bg-[#202020]/80 pointer-events-none z-0" />
      <main className="md:relative flex flex-col gap-2 flex-1 justify-center items-center space-y-2 p-4 z-10 mt-20">
        <Navbar />
        <div className="flex flex-col items-center md:flex-row max-w-[60rem] frosted-glass-card p-10 gap-10">
          <PortfolioInfo />
          <div className="flex-1 flex-col min-w-0 space-y-10">
            <Hello />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default MainPage;
