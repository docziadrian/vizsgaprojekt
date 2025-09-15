"use client";

import BookIcon from "@mui/icons-material/Book";
import StyleIcon from "@mui/icons-material/Style";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PersonIcon from "@mui/icons-material/Person";
import LehetseegesLogo from "@/public/Ikonok/lehetsegesLogoW.png";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const currentLocation = usePathname();

  const navItems = [
    { path: "/", label: "Főoldal", icon: BookIcon },
    { path: "/tanulokartyak", label: "Kártyák", icon: StyleIcon },
    { path: "/notes", label: "Jegyzetek", icon: TextSnippetIcon },
    { path: "/essays", label: "Esszék", icon: ReceiptLongIcon },
    {
      path: "/pszcigologiatesztek",
      label: "Pszichológia",
      icon: PsychologyIcon,
    },
    { path: "/profile", label: "Profil", icon: PersonIcon },
  ];

  return (
    <nav className="h-18 overflow-hidden items-center">
      <ul className="flex space-x-2 p-4 bg-white text-black ">
        <Image
          src={LehetseegesLogo}
          width={100}
          height={70}
          alt="Weboldal logó"
          className="relative -mt-6 mx-4"
          priority
          quality={100}
        />

        <div className="absolute left-1/2 transform -translate-x-1/2 flex">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`py-2 px-4 rounded-xl max-w-38 min-w-38 mx-auto ${
                currentLocation === item.path
                  ? "bg-blue-400/90 text-white font-bold"
                  : ""
              }`}
            >
              <div className="flex justify-center">
                <a
                  href={item.path}
                  className="flex items-center space-x-6 hover:text-blue-600 justify-center"
                >
                  <item.icon className="text-blue-800" />
                  {item.label}
                </a>
              </div>
            </li>
          ))}

          <li className="self-center rounded-xl max-w-38 min-w-38 mx-auto">
            <div className="flex justify-center">
              <a>asd</a>
            </div>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
