"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import axios from "axios";

const PszichologiaTesztKitoltes = () => {
  const pathName = usePathname();
  const id = pathName.split("/").pop();

  const [testData, setTestData] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      let name = "";
      if (id === "stress") {
        name = "pss10";
      }
      if (id === "gad7") {
        name = "gad7";
      }
      if (id === "motivation") {
        name = "msi";
      }
      if (id === "depression") {
        name = "phq9";
      }
      if (id === "esteem") {
        name = "rse";
      }
      try {
        const response = await axios.get(`/tesztek/${name}.json`);
        const data = await response.data;
        setTestData(data);
        setTestQuestions(data.questions || []);
      } catch (error) {
        console.error("Failed to load questions:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [id]);

  const handleAnswerSelect = (questionIndex: any, answerValue: any) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerValue,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce(
      (sum: any, score: any) => sum + score,
      0
    );

    // Use the scoring system from the JSON file
    let level = "";
    let description = "";
    let color = "";
    let percentage = 0;

    //@ts-ignore
    if (testData && testData.scoring) {
      // Find the appropriate level based on the scoring ranges
      const scoringLevel = testData.scoring.find(
        (range) => totalScore >= range.min && totalScore <= range.max
      );

      if (scoringLevel) {
        level = scoringLevel.level;

        // Calculate percentage based on the position within the scoring system
        const totalLevels = testData.scoring.length;
        const levelIndex = testData.scoring.findIndex(
          (range) => range === scoringLevel
        );

        // Calculate position within the current level
        const rangeSize = scoringLevel.max - scoringLevel.min;
        const positionInRange = totalScore - scoringLevel.min;
        const levelProgress = rangeSize > 0 ? positionInRange / rangeSize : 0;

        // Calculate base percentage for this level
        const levelBasePercentage = (levelIndex / totalLevels) * 100;
        const levelRangePercentage = (1 / totalLevels) * 100;

        // Final percentage = base + progress within level
        percentage = levelBasePercentage + levelProgress * levelRangePercentage;
      } else {
        // Fallback if score doesn't match any range
        level = "Ismeretlen szint";
        percentage = 0;
      }
    } else {
      // Fallback to old system if no scoring data
      const maxScore = testQuestions.length * 4;
      percentage = (totalScore / maxScore) * 100;
      level = "Alapértelmezett értékelés";
    }

    // Set color and description based on the level
    if (
      level.includes("Alacsony") ||
      level.includes("csekély") ||
      level.includes("erős")
    ) {
      color = "text-green-600";
      description = "Kiváló! Jó mentális állapotban vagy.";
    } else if (
      level.includes("Mérsékelt") ||
      level.includes("Enyhe") ||
      level.includes("Átlagos") ||
      level.includes("Jó az önértékelésed")
    ) {
      color = "text-yellow-600";
      description = "Átlagos szint. Néhány önsegítő technika hasznos lehet.";
    } else if (level.includes("Közepes")) {
      color = "text-orange-600";
      description = "Fontos, hogy megfelelő stratégiákat alkalmazz.";
    } else if (level.includes("Magas") || level.includes("csekély")) {
      color = "text-red-600";
      description =
        "Átlagostól eltérő eset. Fontos, hogy szakemberrel beszélj.";
    } else if (level.includes("Súlyos") || level.includes("Nagyon kevés")) {
      color = "text-red-600";
      description = "Súlyos szint. Fontos, hogy szakemberrel beszélj.";
    }

    return { totalScore, percentage, level, description, color };
  };

  const currentQuestion = testQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / testQuestions.length) * 100;
  const isLastQuestion = currentQuestionIndex === testQuestions.length - 1;
  const hasAnswered = answers[currentQuestionIndex] !== undefined;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Teszt betöltése...</p>
        </div>
      </div>
    );
  }

  if (testQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Teszt nem található
          </h2>
          <p className="text-gray-600">A kért teszt nem elérhető.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {testData?.title || "Stressz Szint Teszt"}
          </h1>
          <p className="text-gray-600">
            {testData?.title
              ? "Perceived Stress Scale (PSS-10)"
              : "Pszichológiai teszt"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Kérdés {currentQuestionIndex + 1} / {testQuestions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              {currentQuestion?.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion &&
                currentQuestion?.options.map(
                  (option: number, optionIndex: number) => {
                    const answerValue = optionIndex;
                    const isSelected =
                      answers[currentQuestionIndex] === answerValue;

                    return (
                      <motion.button
                        key={optionIndex}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleAnswerSelect(currentQuestionIndex, answerValue)
                        }
                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 text-blue-800"
                            : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-4 h-4 rounded-full border-2 mr-3 ${
                              isSelected
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <div className="w-full h-full rounded-full bg-white scale-50"></div>
                            )}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </motion.button>
                    );
                  }
                )}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                currentQuestionIndex === 0
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-gray-700 text-white"
              }`}
            >
              Előző
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={!hasAnswered}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                !hasAnswered
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : isLastQuestion
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
              }`}
            >
              {isLastQuestion ? "Teszt befejezése" : "Következő"}
            </motion.button>
          </div>
        </div>

        {/* Results Modal */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setShowResults(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowResults(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Teszt eredménye
                  </h2>

                  {(() => {
                    const {
                      totalScore,
                      percentage,
                      level,
                      description,
                      color,
                    } = calculateScore();
                    return (
                      <>
                        <div className="mb-6">
                          <p className="text-3xl font-bold text-gray-800 mb-2">
                            {totalScore} pont
                          </p>
                          <p className={`text-xl font-semibold ${color} mb-2`}>
                            {level}
                          </p>
                          <p className="text-gray-600">{description}</p>
                        </div>

                        <div className="bg-gray-100 rounded-xl p-4 mb-6">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Eredmény szint</span>
                            <span>{Math.round(percentage)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full transition-all duration-500 ${
                                percentage <= 25
                                  ? "bg-green-500"
                                  : percentage <= 50
                                  ? "bg-yellow-500"
                                  : percentage <= 75
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </>
                    );
                  })()}

                  <button
                    onClick={() => setShowResults(false)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    Bezárás
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PszichologiaTesztKitoltes;
