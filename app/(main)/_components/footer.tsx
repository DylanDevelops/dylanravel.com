import Link from "next/link";

import { ProfileInformation } from "@/lib/branding";

const Footer = () => {
  return (
    <footer className="flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
      <p className="text-white">
        © {ProfileInformation.CopyrightYear} by{" "}
        <Link href="/" className="font-bold">
          {ProfileInformation.FullName}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
