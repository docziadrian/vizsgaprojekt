import { motion } from "framer-motion";
import Image from "next/image";

import LehetseegesLogo from "@/public/Ikonok/lehetsegesLogoW.png";
import Link from "next/link";
import { TravelExplore, HeartBrokenSharp } from "@mui/icons-material";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

const HeroSection = ({
  user,
  itemVariants,
}: {
  user: any;
  itemVariants: any;
}) => {
  return (
    <>
      <motion.section
        variants={itemVariants}
        className="section-spacing text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-30 h-30 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-salient-lg"
          >
            <Image
              src={LehetseegesLogo}
              width={100}
              height={100}
              quality={100}
              alt="Webapp logó"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-hero text-gray-900 mb-6"
          >
            Üdvözöl a <span className="text-gradient">TanulóPont</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-body-large text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Modern oktatási platform, ahol tanulás, pszichológiai támogatás és
            AI segítség találkozik. Tanulj kártyákkal, oszd meg jegyzeteidet, és
            beszélgess AI segítővel.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/decks"
                className="btn-salient text-lg px-8 py-4 inline-flex items-center gap-3 shadow-salient-lg"
              >
                <HeartBrokenSharp className="w-5 h-5" />
                Kezdj el tanulni
                <TravelExplore className="w-4 h-4" />
              </Link>
            </motion.div>

            {user.role === "guest" && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/profile"
                  className="btn-salient text-lg px-8 py-4 gradient-secondary inline-flex items-center gap-3 shadow-salient-lg"
                >
                  <TravelExplore className="w-5 h-5" />
                  Regisztrálj most
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Tanulók támogatása",
                icon: PsychologyAltIcon,
                color: "gradient-success",
              },
              {
                title: "AI-alapú tanulás",
                icon: PsychologyAltIcon,
                color: "gradient-primary",
              },
              {
                title: "Közösségi tudásmegosztás",
                icon: TravelExplore,
                color: "gradient-secondary",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="card-salient card-spacing text-center group hover:shadow-salient-lg"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-card-title text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-gray-600">
                  Modern megközelítés a hatékony tanuláshoz
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
