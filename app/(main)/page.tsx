import "@/components/css/frosted-glass.css";

import FloatingShapes from "./_components/floating-shapes";
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
    <div className="relative m-0 flex min-h-screen w-screen flex-col bg-[#202020] p-0">
      <FloatingShapes />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[#202020]/70" />

      <main className="z-10 mt-20 flex flex-1 flex-col items-center justify-center gap-2 space-y-2 p-4 md:relative">
        <Navbar />
        <div className="frosted-glass-card flex max-w-[60rem] flex-col items-center gap-10 p-10 md:flex-row">
          <PortfolioInfo />
          <div className="min-w-0 flex-1 flex-col space-y-10">
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
