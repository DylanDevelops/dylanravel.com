import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { PortfolioConstants } from "@/lib/branding";
import { GitHubURL, InstagramURL, ItchIoURL, KoFiURL, LinkedInURL, ORCIDUrl } from "@/lib/links";

const PortfolioInfo = () => {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-shrink-0 md:sticky top-10 md:self-start h-fit">
      <div className="frosted-glass-button rounded-4xl">
        <Image
          src={PortfolioConstants.Headshots[0]}
          unoptimized
          width={192}
          height={192}
          priority
          alt={`A picture of ${PortfolioConstants.FullName}`}
          className="w-48 h-48 rounded-4xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-[1.5rem] text-white">{PortfolioConstants.FullName}</h1>
        <div className="flex flex-col gap-2 w-max mx-auto">
          <Link
            href={`mailto:${PortfolioConstants.Email}`}
            target="_blank"
            className="frosted-glass-button py-2 rounded-full p-2 text-white hover:scale-110 transition-all duration-200 flex flex-row gap-2 justify-between items-center w-full select-none"
          >
            <MailIcon className="w-5 h-5" /> Contact Me
          </Link>
          <div className="flex flex-row gap-2 justify-center w-full">
            <Link
              href={GitHubURL}
              target="_blank"
              className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub Logo"
                className="w-5 h-5 select-none"
                unoptimized
                width={1}
                height={1}
                draggable={false}
              />
            </Link>
            <Link
              href={LinkedInURL}
              target="_blank"
              className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
            >
              <LinkedinIcon className="w-5 h-5" aria-label="LinkedIn Logo" />
            </Link>
            <Link
              href={ItchIoURL}
              target="_blank"
              className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
            >
              <Image
                src="/icons/itch.svg"
                alt="Itch.io Logo"
                className="w-5 h-5 select-none"
                unoptimized
                width={1}
                height={1}
                draggable={false}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 justify-center">
          <Link
            href={ORCIDUrl}
            target="_blank"
            className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
          >
            <Image
              src="/icons/orcid.svg"
              alt="ORCID Logo"
              className="w-5 h-5 select-none"
              unoptimized
              width={1}
              height={1}
              draggable={false}
            />
          </Link>
          <Link
            href={InstagramURL}
            target="_blank"
            className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
          >
            <InstagramIcon className="w-5 h-5" aria-label="Instagram Logo" />
          </Link>
          <Link
            href={KoFiURL}
            target="_blank"
            className="frosted-glass-button p-2 rounded-full text-white hover:scale-110 transition-all duration-200"
          >
            <Image
              src="/icons/kofi.svg"
              alt="Ko-fi Logo"
              className="w-5 h-5 select-none"
              unoptimized
              width={1}
              height={1}
              draggable={false}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
