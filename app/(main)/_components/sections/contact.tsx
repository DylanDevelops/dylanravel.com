import Link from "next/link";

import { PortfolioConstants } from "@/lib/branding";

const Contact = () => {
  return (
    <section id="contact" className="flex scroll-mt-10 flex-col gap-2">
      <h2 className="text-2xl font-bold text-white">Contact</h2>
      <div className="flex flex-col gap-1">
        <p className="text-white/80">Let's get in touch! Send me a message:</p>
        <Link
          href={`mailto:${PortfolioConstants.Email}`}
          className="relative self-start text-lg text-white/90 transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:block after:h-[2px] after:w-0 after:rounded-2xl after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white/75 hover:after:w-full"
        >
          {PortfolioConstants.Email}
        </Link>
      </div>
    </section>
  );
};

export default Contact;
