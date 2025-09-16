"use client";

import LehetseegesLogo from "@/public/Ikonok/lehetsegesLogoW.png";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const currentLocation = usePathname();
  const router = useRouter();

  const navItems = [
    { path: "/", label: "Főoldal" },
    { path: "/tanulokartyak", label: "Kártyák" },
    { path: "/notes", label: "Jegyzetek" },
    { path: "/essays", label: "Esszék" },
    { path: "/pszcigologiatesztek", label: "Pszichológia" },
    { path: "/profile", label: "Profil" },
  ];

  //Az underline animációhoz szükséges ref -ek és állapotok kezelése
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 }); // Kezdeti értéke 0, 0

  useEffect(() => {
    const idx = navItems.findIndex((item) => item.path === currentLocation);
    const el = itemRefs.current[idx];
    if (el) {
      const { left, width } = el.getBoundingClientRect(); // A left és a width érték kiszedése az objektumból, amit a getBoundingClientRect() visszaad
      const parentLeft =
        el.parentElement?.parentElement?.getBoundingClientRect().left || 0;
      setUnderlineProps({ left: left - parentLeft, width }); // Az underline pozíciójának és szélességének beállítása
    }
  }, [currentLocation]); // Csak akkor fut le, ha a currentLocation változik

  return (
    <nav className="w-full sticky top-0 z-40 bg-white">
      <div className="bg-gradient-to-r from-blue-600/50 via-blue-200 to-blue-500/50 p-2 rounded-full w-full h-6 absolute opacity-70 blur-2xl mx-auto"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo és oldal neve */}
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

        {/* Közép */}
        <div className="relative">
          <ul className="flex items-center bg-white/10 border border-[#e3eafc] rounded-full shadow-sm px-4 py-2 gap-2 md:gap-4 backdrop-blur-md relative">
            {/* Motion divelt animáció az underline -hoz */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute bottom-0 h-[3px] bg-[#2130b8a9] rounded-full"
              style={{
                left: underlineProps.left,
                width: underlineProps.width,
                zIndex: 1,
              }}
            />
            {navItems.map((item, idx) => (
              <li key={item.path} className="relative z-10 cursor-pointer">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(item.path);
                  }}
                  ref={(el: any) => (itemRefs.current[idx] = el)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors
                    ${
                      currentLocation === item.path
                        ? "bg-[#ede9fe] text-[#3456ba]"
                        : "text-[#241c3a] hover:bg-[#f3f4f8]"
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Jobb */}
        <div className="flex items-center gap-2 ml-2">
          <a
            href="/signin"
            className="px-4 py-1 rounded-full border border-[#e3eafc] bg-white/70 text-[#241c3a] text-sm font-medium shadow-sm hover:bg-[#f3f4f8] transition"
          >
            Bejelentkezés
          </a>
          <a
            href="/get-started"
            className="px-4 py-1 rounded-full bg-[#113ec2] text-white text-sm font-medium shadow-sm border border-[#e3eafc] hover:bg-[#005ece] transition"
          >
            Regisztráció
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
