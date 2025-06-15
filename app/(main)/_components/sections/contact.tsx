import Link from "next/link";

import { ContactInformation } from "@/lib/branding";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col gap-2 scroll-mt-4">
      <h1 className="text-white font-bold text-2xl">Contact</h1>
      <div className="flex flex-col gap-1">
        <p className="text-white/80">Let's get in touch! Send me a message:</p>
        <Link
          href={`mailto:${ContactInformation.Email}`}
          className="self-start text-lg text-white/90 hover:text-white/80 relative after:content-[''] after:rounded-2xl after:block after:h-[2px] after:bg-white after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          {ContactInformation.Email}
        </Link>
      </div>
    </section>
  );
};

export default Contact;
