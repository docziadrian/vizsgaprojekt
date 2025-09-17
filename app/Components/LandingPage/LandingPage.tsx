"use client";

import React from "react";
import { motion } from "framer-motion";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartBroken,
  Lightbulb,
  TravelExplore,
  VerifiedUserSharp,
} from "@mui/icons-material";
import MaxWidthWrapper from "../Display/MaxWidthWrapper";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  const user = { role: "guest" }; // Példa felhasználó objektum, valós alkalmazásban ezt autentikációból kellene szerezni

  const features = [
    {
      icon: AccountTreeIcon,
      title: "Kártyapaklik",
      description:
        "Tanulj interaktív kártyákkal, szűrj évfolyam és tantárgy szerint",
      link: "/decks",
      color: "gradient-bg",
      delay: 0.1,
    },
    {
      icon: AccountTreeIcon,
      title: "AI Segítő",
      description: "Beszélgess AI-val a tanulásról és a mentális egészségről",
      link: "/profile",
      color: "gradient-bg-secondary",
      delay: 0.2,
    },
    {
      icon: AccountTreeIcon,
      title: "Tartalom Feltöltés",
      description: "Tölts fel kártyapaklikat, jegyzeteket és esszéket",
      link: "/editor",
      color: "gradient-bg-success",
      delay: 0.3,
      restricted: true,
    },
    {
      icon: AccountTreeIcon,
      title: "Jegyzetek",
      description: "Oszd meg jegyzeteidet, értékeld másokét",
      link: "/notes",
      color: "gradient-bg-warning",
      delay: 0.4,
    },
    {
      icon: AccountTreeIcon,
      title: "Esszék",
      description: "Témák szerint rendezett esszék és szakdolgozatok",
      link: "/essays",
      color: "gradient-bg-success",
      delay: 0.5,
    },
  ];

  const stats = [
    { icon: AccountTreeIcon, label: "Aktív felhasználók", value: "1,234" },
    { icon: AccountTreeIcon, label: "Kártyapaklik", value: "567" },
    { icon: AccountTreeIcon, label: "Jegyzetek", value: "2,890" },
    { icon: AccountTreeIcon, label: "Értékelések", value: "4.8/5" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-100/80 to-purple-100/20 py-12">
      <MaxWidthWrapper className="">
        <div className="container-salient">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Section */}
            <HeroSection user={user} itemVariants={itemVariants} />

            {/* Stats Section */}
            <motion.section variants={itemVariants} className="section-spacing">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="card-salient card-spacing text-center group hover:shadow-salient-lg"
                    >
                      <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gradient mb-2">
                        {stat.value}
                      </div>
                      <div className="text-caption text-gray-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section variants={itemVariants} className="section-spacing">
              <motion.h2
                variants={itemVariants}
                className="text-section-title text-center text-gray-900 mb-16"
              >
                Főbb funkciók
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="group"
                    >
                      <Link
                        href={feature.link}
                        className={`card-salient card-spacing h-full flex flex-col transition-all duration-300 ${
                          feature.restricted
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:shadow-salient-lg"
                        }`}
                      >
                        <div
                          className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-salient`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <h3 className="text-card-title mb-3 text-gray-800">
                          {feature.title}
                        </h3>
                        <p className="text-body text-gray-600 flex-grow mb-6">
                          {feature.description}
                        </p>

                        {feature.restricted && (
                          <div className="mt-4 text-caption text-warning-400 font-medium">
                            ⚠️ Jogosultság szükséges
                          </div>
                        )}

                        <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                          <span className="text-caption">Tovább</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section variants={itemVariants} className="section-spacing">
              <div className="card-salient card-spacing">
                <motion.h2
                  variants={itemVariants}
                  className="text-section-title text-center text-gray-900 mb-16"
                >
                  Miért válaszd a TanulóPontot?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-salient">
                      <TravelExplore className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4 text-gray-800">
                      Célzott tanulás
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Szűrj kártyapaklikat évfolyam és tantárgy szerint, hogy
                      pontosan azt találd, amire szükséged van.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-salient">
                      <HeartBroken className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4 text-gray-800">
                      Mentális támogatás
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      AI segítő és pszichológiai tesztek segítenek a mentális
                      egészség megőrzésében.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 gradient-success rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-salient">
                      <Lightbulb className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-card-title mb-4 text-gray-800">
                      Közösségi tanulás
                    </h3>
                    <p className="text-body text-gray-600 leading-relaxed">
                      Oszd meg jegyzeteidet, értékeld másokét, és építsd fel a
                      tudásod közösen.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            {user.role === "guest" && (
              <motion.section
                variants={itemVariants}
                className="section-spacing text-center"
              >
                <div className="card-salient card-spacing">
                  <motion.h2
                    variants={itemVariants}
                    className="text-section-title text-gray-900 mb-6"
                  >
                    Készen állsz a tanulásra?
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-body-large text-gray-700 mb-8"
                  >
                    Csatlakozz több ezer diákhoz és tanárhoz, akik már
                    használják a TanulóPontot!
                  </motion.p>
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/profile"
                        className="btn-salient text-lg px-8 py-4 inline-flex items-center gap-3 shadow-salient-lg"
                      >
                        <TravelExplore className="w-5 h-5" />
                        Diákként regisztrálok
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/profile"
                        className="btn-salient text-lg px-8 py-4 gradient-secondary inline-flex items-center gap-3 shadow-salient-lg"
                      >
                        <VerifiedUserSharp className="w-5 h-5" />
                        Tanárként regisztrálok
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.section>
            )}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
