import { motion } from "framer-motion";
import Link from "next/link";
import { TravelExplore, HeartBrokenSharp } from "@mui/icons-material";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import LandingCarousel from "./LandingCarousel";
import LehetseegesLogo from "@/public/Ikonok/lehetsegesLogoW.png";
import LehetseegesLogoW2 from "@/public/Ikonok/lehetsegesLogoW2.png";
import Image from "next/image";

import BookIcon from '@mui/icons-material/Book';
import OrangeButton from "../Display/OrangeButton";
import BlueButton from "../Display/BlueButton";

const HeroSection = ({
  user,
  itemVariants,
}: {
  user: any;
  itemVariants: any;
}) => {
  return (
    <>
      <motion.section variants={itemVariants} className="section-spacing">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Text + CTAs */}
          <div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="w-30 h-30 gradient-primary rounded-3xl flex flex-col items-center justify-center mx-auto shadow-salient-lg"
          >
            <Image
              src={LehetseegesLogoW2}
              width={100}
              height={100}
              quality={100}
              alt="Webapp logó"
              className="w-full h-full object-contain"
            />
          </motion.div>
            <h1 className="text-2xl mb-4 font-semibold text-[#241c3a] tracking-tight text-center">Üdvözlünk a TanulóPont weboldalán!</h1>
            <motion.p
              variants={itemVariants}
              className="text-body-large text-gray-700 mb-8 max-w-xl leading-relaxed"
            >
              Tanulj kártyákkal, oszd meg jegyzeteidet, és ismerd meg önmagad
              pszichológiai tesztekkel és AI-támogatással.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6 justify-center " >
              <OrangeButton>
                <BookIcon className="w-5 h-5" />
                Kezdj el tanulni
              </OrangeButton>

              {user.role === "guest" && (
                <BlueButton>
                  <TravelExplore className="w-5 h-5" />
                  <p className="">Regisztrálj most</p>
                </BlueButton>
              )}
            </motion.div>

            {/* Trust row */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 text-sm text-gray-600 justify-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500"></span>
                Interaktív kártyák
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-success-500"></span>
                AI segítő
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-warning-500"></span>
                Ingyenes kezdés
              </div>
            </motion.div>
          </div>

          {/* Right: Visual (Carousel) */}
          <motion.div
            variants={itemVariants}
            className="order-first md:order-last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <LandingCarousel />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
