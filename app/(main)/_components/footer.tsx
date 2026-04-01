import Link from "next/link";

import { PortfolioConstants } from "@/lib/branding";

const Footer = () => {
  return (
    <footer className="frosted-glass-card flex max-w-[60rem] flex-row items-center gap-6 p-4">
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
