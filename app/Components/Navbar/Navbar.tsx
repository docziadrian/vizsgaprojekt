"use client";

import LehetseegesLogo from "@/public/Ikonok/lehetsegesLogoW.png";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import UserLoggedOut from "./UserLoggedOut";
import UserLoggedIn from "./UserLoggedIn";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const currentLocation = usePathname();
  const router = useRouter();

  const navItems = [
    { path: "/", label: "Főoldal" },
    { path: "/tanulokartyak", label: "Kártyák" },
    { path: "/notes", label: "Jegyzetek" },
    { path: "/essays", label: "Esszék" },
    { path: "/pszcigologiatesztek", label: "Pszichológia" },
    { path: "/rolunk", label: "Rólunk" },
  ];

  const user = {
    fullName: "",
    userName: "bujaerika"
  }

  

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme ("light")
  }

  //Az underline animációhoz szükséges ref -ek és állapotok kezelése
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const listRef = useRef<HTMLUListElement | null>(null);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 }); // Kezdeti értéke 0, 0

  useLayoutEffect(() => {
    const updateUnderlinePosition = () => {
      const idx = navItems.findIndex((item) => item.path === currentLocation);
      const el = itemRefs.current[idx];
      const container = listRef.current;
      if (el && container) {
        const itemRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setUnderlineProps({ left: itemRect.left - containerRect.left, width: itemRect.width });
      }
    };

    updateUnderlinePosition();
    window.addEventListener('resize', updateUnderlinePosition);
    return () => {
      window.removeEventListener('resize', updateUnderlinePosition);
    };
  }, [currentLocation]);

  return (
    <nav className="w-full sticky top-0 z-40 bg-transparent backdrop-blur-lg">
  <div className="bg-gradient-to-r from-blue-600/50 via-blue-200 to-blue-500/50 p-2 rounded-full w-full h-6 absolute opacity-70 blur-2xl mx-auto"></div>

  {/* Main nav container */}
  <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

    {/* Left: Logo */}
    <div className="flex items-center gap-2">
      <a href="/" className="flex items-center gap-2">
        <Image
          src={LehetseegesLogo}
          width={80}
          height={80}
          alt="Weboldal logó"
          className="rounded-lg"
          priority
          quality={100}
        />
        <span className="text-2xl font-semibold text-[#241c3a] tracking-tight">
          TanulóPont
        </span>
      </a>
    </div>

    {/* Center: Navigation (absolutely centered) */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <ul
        ref={listRef}
        className="flex items-center bg-white/10 border border-[#e3eafc] rounded-full shadow-sm px-4 py-2 gap-2 md:gap-4 backdrop-blur-md relative"
      >
        <motion.div
          animate={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="absolute bottom-0 h-[3px] bg-[#2130b8a9] rounded-full"
          style={{ zIndex: 1 }}
        />
        {navItems.map((item, idx) => (
          <li key={item.path} className="relative z-10 cursor-pointer">
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push(item.path);
              }}
              ref={(el: any) => (itemRefs.current[idx] = el)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                currentLocation === item.path
                  ? "bg-[#ede9fe] text-[#3456ba]"
                  : "hover:bg-[#ede9fe] text-[#241c3a] hover:blur-[0.45px] hover:shadow-sm hover:shadow-[#c3d2fc67]"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Right: Theme toggle & user */}
    <div className="flex items-center gap-4">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {user ? <UserLoggedIn user={user} /> : <UserLoggedOut />}
    </div>

  </div>
</nav>

  );
};

export default Navbar;
