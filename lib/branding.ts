import { CodeXmlIcon } from "lucide-react";

export const PortfolioConstants = {
  FirstName: "Dylan",
  LastName: "Ravel",
  Company: {
    Name: "Ravision Tech",
    LegalName: "Ravision Tech LLC",
    URL: "https://ravisiontech.com",
  },
  get FullName() {
    return `${this.FirstName} ${this.LastName}`;
  },
  Headshots: ["/images/pfp.webp", "/images/pfp_rounded.webp", "/images/pfp2", "/images/pfp2_rounded"],
  Email: "hello@dylanravel.com",
  Logo: CodeXmlIcon,
  CopyrightYear: new Date().getFullYear(),
  GoogleAnalyticsTag: "G-81KCGWFGBT",
};
