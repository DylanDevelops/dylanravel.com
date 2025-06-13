import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-row max-w-[60rem] frosted-glass-card p-4 gap-6 items-center">
      <p className="text-white">
        © 2025 by{" "}
        <Link href="/" className="font-bold">
          Dylan Ravel
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
