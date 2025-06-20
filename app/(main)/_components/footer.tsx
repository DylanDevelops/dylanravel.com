import Link from "next/link";

import { PortfolioConstants } from "@/lib/branding";

const Footer = () => {
  return (
    <footer className="flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
      <p className="text-white">
        © {PortfolioConstants.CopyrightYear} by{" "}
        <Link href="/" className="font-bold">
          {PortfolioConstants.FullName}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
