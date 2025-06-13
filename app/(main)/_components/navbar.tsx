import Link from "next/link";
import { BoxIcon, MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full sm:w-auto">
      <div className="hidden sm:flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
        <Link href="/" className="text-white font-bold">
          <BoxIcon className="text-white w-8 h-8" />
        </Link>
        <Link href="/#about" className="text-white font-bold">
          About
        </Link>
        <Link href="/#skills" className="text-white font-bold">
          Skills
        </Link>
        <Link href="/#projects" className="text-white font-bold">
          Projects
        </Link>
        <Link href="/#contact" className="text-white font-bold">
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
