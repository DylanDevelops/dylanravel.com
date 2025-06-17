import Link from "next/link";
import { BoxIcon, MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sm:w-auto">
      <div className="hidden sm:flex flex-row max-w-[60rem] frosted-glass-card items-center">
        <Link
          href="/"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-4 pr-4 rounded-l-[3.125rem] duration-200 transition-colors"
        >
          <BoxIcon className="text-white w-8 h-8" />
        </Link>
        <Link
          href="/#about"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          About
        </Link>
        <Link
          href="/#skills"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          Skills
        </Link>
        <Link
          href="/#projects"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 duration-200 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="bg-transparent text-white font-bold px-4 border-white/40 hover:bg-white/10 py-5 pr-4 rounded-r-[3.125rem] duration-200 transition-colors"
        >
          Contact
        </Link>
      </div>
      <div className="flex w-full flex-row justify-between sm:hidden">
        <Link href="/" className="text-white font-bold">
          <div className="flex flex-row w-min frosted-glass-card p-4 gap-6 items-center">
            <BoxIcon className="text-white w-6 h-6" />
          </div>
        </Link>
        {/* <Link href="/" className="text-white font-bold">
          <div className="flex flex-row frosted-glass-card p-4 gap-6 items-center">
            <p>Dylan's Portfolio</p>
          </div>
        </Link> */}
        <Link href="/" className="text-white font-bold">
          <div className="flex flex-row w-min frosted-glass-card p-4 gap-6 items-center">
            <MenuIcon className="text-white w-6 h-6" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
