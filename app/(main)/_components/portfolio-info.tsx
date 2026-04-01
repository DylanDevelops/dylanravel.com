import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { PortfolioConstants } from "@/lib/branding";
import { GitHubURL, InstagramURL, ItchIoURL, KoFiURL, LinkedInURL, ORCIDUrl } from "@/lib/links";

const PortfolioInfo = () => {
  return (
    <div className="top-10 flex h-fit flex-col items-center gap-2 md:sticky md:flex-shrink-0 md:self-start">
      <div className="frosted-glass-button rounded-4xl">
        <Image
          src={PortfolioConstants.Headshots[0]}
          unoptimized
          width={192}
          height={192}
          priority
          alt={`A picture of ${PortfolioConstants.FullName}`}
          className="h-48 w-48 rounded-4xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[1.5rem] font-bold text-white">{PortfolioConstants.FullName}</h1>
        <div className="mx-auto flex w-max flex-col gap-2">
          <Link
            href={`mailto:${PortfolioConstants.Email}`}
            target="_blank"
            className="frosted-glass-button flex w-full flex-row items-center justify-between gap-2 rounded-full p-2 py-2 text-white transition-all duration-200 select-none hover:scale-110"
          >
            <MailIcon className="h-5 w-5" /> Contact Me
          </Link>
          <div className="flex w-full flex-row justify-center gap-2">
            <Link
              href={GitHubURL}
              target="_blank"
              className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub Logo"
                className="h-5 w-5 select-none"
                unoptimized
                width={1}
                height={1}
                draggable={false}
              />
            </Link>
            <Link
              href={LinkedInURL}
              target="_blank"
              className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
            >
              <LinkedinIcon className="h-5 w-5" aria-label="LinkedIn Logo" />
            </Link>
            <Link
              href={ItchIoURL}
              target="_blank"
              className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
            >
              <Image
                src="/icons/itch.svg"
                alt="Itch.io Logo"
                className="h-5 w-5 select-none"
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
        <div className="flex flex-row justify-center gap-2">
          <Link
            href={ORCIDUrl}
            target="_blank"
            className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/icons/orcid.svg"
              alt="ORCID Logo"
              className="h-5 w-5 select-none"
              unoptimized
              width={1}
              height={1}
              draggable={false}
            />
          </Link>
          <Link
            href={InstagramURL}
            target="_blank"
            className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
          >
            <InstagramIcon className="h-5 w-5" aria-label="Instagram Logo" />
          </Link>
          <Link
            href={KoFiURL}
            target="_blank"
            className="frosted-glass-button rounded-full p-2 text-white transition-all duration-200 hover:scale-110"
          >
            <Image
              src="/icons/kofi.svg"
              alt="Ko-fi Logo"
              className="h-5 w-5 select-none"
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
