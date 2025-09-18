import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import LehetseegesLogoW2 from "@/public/Ikonok/lehetsegesLogoW2.png";

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Image from "next/image";

const UserLoggedIn = ({ user }: { user: any }) => {
  return (
    <>
      <ul className="flex items-center bg-white/10 border border-[#e3eafc] rounded-full shadow-sm px-4 py-1 gap-2 md:gap-4 backdrop-blur-md relative">
        {/* Motion divelt animáció az underline -hoz */}
        <li className="relative z-10 cursor-pointer">
          <div
            onClick={(e) => {
              e.preventDefault();
            }}
            className="text-[#241c3a] hover:bg-transparent hover:blur-[0.45px] hover:shadow-sm hover:shadow-[#c3d2fc67] flex"
            
          >
            <div className="flex space-x-1 items-center">
            <Image width={30} height={30} src={LehetseegesLogoW2} alt="Profil" />
            <div className="flex flex-col space-x-1 items-bottom">
            <p className="text-sm">{user.fullName}</p>
            <p className="text-sm">{user.userName}</p>
            </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default UserLoggedIn;
