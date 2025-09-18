"use client";

import { motion } from "framer-motion";
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ThemeToggleProps {
  theme: string;
  onToggle: () => void;
  className?: string;
}

const ThemeToggle = ({ theme, onToggle, className }: ThemeToggleProps) => {
  const isLight = theme === "light";

  return (
    <div className="flex items-center bg-white/10 border border-[#e3eafc] rounded-full shadow-sm px-2  gap-1 md:gap-4 backdrop-blur-md relative">
    <motion.button
      onClick={onToggle}
      className={
        "relative w-15 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300 " +
        (theme === "light" ? "" : "") +
        (className ? ` ${className}` : "")
      }
      
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Sliding Circle */}
      <motion.div
        className="absolute top-1 w-6 h-6 bg-transparent backdrop-blur-lg rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isLight ? -2 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{
            rotate: isLight ? 0 : 360,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {isLight ? (
            <SunnyIcon className="w-4 h-4 text-yellow-500" />
          ) : (
            <DarkModeIcon className="w-4 h-4 text-blue-500 z-3" />
          )}
        </motion.div>
      </motion.div>

      {/* Background Icons */}
      <div className="flex justify-between items-center h-full px-0.5">
        <div className="w-4 h-4 flex items-center justify-center">
          <SunnyIcon className="w-4 h-4 text-gray-400/50" />
        </div>
        <div className="w-4 h-4 flex items-center justify-center">
          <DarkModeIcon className="w-4 h-4 text-gray-400/50 -z-2" />
        </div>
      </div>
    </motion.button>
    </div>
  );
};

export default ThemeToggle;