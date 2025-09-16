import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PszichologiaKategoriak = () => {
  const navigate = usePathname();

  const psychologicalTests = [
    {
      id: "default",
      title: "Alap teszt",
      officialTitle: "TanuloPont által ajánlott teszt",
      description:
        "Általános kérdések alapján ajánlunk neked megfelelő pszichológiai vagy tanulási tesztet.",
      icon: AccountTreeIcon,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      questions: 10,
      duration: "5 perc",
    },
    {
      id: "stress",
      title: "Stressz szint teszt",
      officialTitle: "Perceived Stress Scale (PSS-10)",
      description:
        "Felméri, mennyire érzed magad stresszesnek a mindennapokban, és hogyan kezeled a feszültséget.",
      icon: MonitorHeartIcon,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      questions: 10,
      duration: "5 perc",
    },
    {
      id: "motivation",
      title: "Motivációs teszt",
      officialTitle: "Motivational Style Inventory (MSI)",
      description:
        "Megmutatja, mi motivál a tanulásban: belső érdeklődés vagy inkább külső elvárások.",
      icon: TrendingUpIcon,
      color: "bg-gradient-to-r from-green-500 to-green-600",
      questions: 15,
      duration: "8 perc",
    },
    {
      id: "gad7",
      title: "Generalizált szorongás teszt",
      officialTitle: "General Anxiety Disorder (GAD-7)",
      description:
        "Segít felismerni, mennyire érzel általános szorongást vagy állandó idegességet az utóbbi hetekben.",
      icon: PsychologyAltIcon,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      questions: 7,
      duration: "4 perc",
    },
    {
      id: "depression",
      title: "Depressziós tünetek felmérése",
      officialTitle: "Patient Health Questionnaire (PHQ-9)",
      description:
        "Rövid kérdőív a hangulatról és depressziós tünetekről, a lelkiállapotod jobb megértésére.",
      icon: SentimentDissatisfiedIcon,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      questions: 9,
      duration: "5 perc",
    },
    {
      id: "esteem",
      title: "Bizonytalanság felmérése",
      officialTitle: "Rosenberg Self-Esteem Scale (RSES)",
      description:
        "Önértékelést mérő teszt, amely feltárja, mennyire bízol önmagadban és képességeidben.",
      icon: QuestionMarkIcon,
      color: "bg-gradient-to-r from-red-500 to-red-600",
      questions: 10,
      duration: "5 perc",
    },
    {
      id: "testanxiety",
      title: "Vizsgaszorongás felmérése",
      officialTitle: "Test Anxiety Inventory (TAI)",
      description:
        "Vizsgaszorongást mér, segít megérteni, mennyire gátol a teljesítményedben a vizsgahelyzet.",
      icon: NewspaperIcon,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      questions: 10,
      duration: "5 perc",
    },
    {
      id: "learningstrategies",
      title: "Tanulási stratégiák felmérése",
      officialTitle: "Learning and Study Strategies Inventory (LASSI)",
      description:
        "Tanulási szokásaidat, stratégiáidat méri: időbeosztás, koncentráció, szervezés és tanulási technikák.",
      icon: LocalLibraryIcon,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      questions: 20,
      duration: "10 perc",
    },
    {
      id: "procrastination",
      title: "Halogatási szokások felmérése",
      officialTitle: "Tuckman Procrastination Scale (TPS)",
      description:
        "Halogatási szokásokat vizsgál: milyen gyakran tolod el a feladataidat, és miért.",
      icon: AccessTimeIcon,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      questions: 10,
      duration: "10 perc",
    },
  ];
  return (
    <>
      <div
        className="card-modern p-6"
        style={{ fontFamily: "var(--font-bricolage-sans)" }}
      >
        <h3 className="text-xl font-semibold mb-4">Pszichológiai tesztek</h3>
        <p className="text-gray-600 mb-6">
          Fedezze fel mentális állapotát és tanulási preferenciáit ezekkel a
          szakmai tesztekkel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {psychologicalTests.map((test) => {
            const Icon = test.icon;
            return (
              <motion.div
                key={test.id}
                whileHover={{ scale: 1.05 }}
                className="card-modern min-h-80 max-h-80 p-4 hover:shadow-modern-lg transition-all duration-300 border border-gray-200"
              >
                <div
                  className={`w-12 h-12 ${test.color} rounded-xl flex items-center justify-center mb-3`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="font-semibold mb-2">{test.title}</h4>
                <h5 className="font-light mb-2 text-sm">
                  {test.officialTitle}
                </h5>
                <p className="text-sm text-gray-600 mb-3 min-h-16 max-h-16 ">
                  {test.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{test.questions} kérdés</span>
                  <span>{test.duration}</span>
                </div>

                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-2 text-white w-full text-md rounded-lg transition-all duration-200">
                  Teszt indítása
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PszichologiaKategoriak;
