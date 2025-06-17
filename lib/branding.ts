import { BoxIcon } from "lucide-react";

export const ProfileInformation = {
  FirstName: "Dylan",
  LastName: "Ravel",
  get FullName() {
    return `${this.FirstName} ${this.LastName}`;
  },
  Headshots: ["/images/pfp.webp", "/images/pfp2.webp"],
  Email: "hello@dylanravel.com",
  Logo: BoxIcon,
  CopyrightYear: new Date().getFullYear(),
};
