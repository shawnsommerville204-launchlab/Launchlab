"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BootSequence from "./BootSequence";
import ReactorCore from "./ReactorCore";
import ReactorSequence from "./ReactorSequence";
import Council from "./Council";
import Orbit from "./Orbit";
import IdeaChamber from "./IdeaChamber";
import ScoreCard from "./ScoreCard";
import LabHUB from "./LabHUB";
import Labscene from "./Labscene";


type LabStage =
  | "boot"
  | "reactor"
  | "analysis"
  | "council"
  | "idea"
  | "score"
  | "mission";


export default function LabController() {


  const [stage, setStage] = useState<LabStage>("boot");



  function startLaunchLab() {


    setStage("reactor");


    setTimeout(() => {

      setStage("analysis");

    }, 3500);



    setTimeout(() => {

      setStage("council");

    }, 9000);



    setTimeout(() => {

      setStage("idea");

    }, 12500);


  }



  function showScore(){

    setStage("score");

  }



  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
        overflow-hidden
      "
    >


      <AnimatePresence mode="wait">



        {/* BOOT */}

        {stage === "boot" && (

          <motion.div

            key="boot"

            initial={{
              opacity:1
            }}

            exit={{
              opacity:0,
              scale:1.2
            }}

          >

            <BootSequence />


            <motion.button

              onClick={startLaunchLab}

              whileHover={{
                scale:1.08
              }}

              whileTap={{
                scale:.95
              }}

              className="
                fixed
                bottom-10
                left-1/2
                -translate-x-1/2
                px-10
                py-4
                rounded-full
                border
                border-cyan-400
                text-cyan-300
                font-bold
                tracking-widest
                bg-black
                shadow-[0_0_40px_rgba(0,255,255,.7)]
              "

            >

              ENTER LAUNCHLAB ⚡

            </motion.button>


          </motion.div>

        )}






        {/* REACTOR */}

        {stage === "reactor" && (

          <motion.div

            key="reactor"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            className="
              min-h-screen
              flex
              items-center
              justify-center
            "

          >

            <div className="text-center">


              <ReactorCore />


              <h1
                className="
                  mt-8
                  text-4xl
                  text-cyan-400
                  font-bold
                  tracking-widest
                "
              >

                REACTOR ONLINE

              </h1>


              <Orbit />

            </div>


          </motion.div>

        )}






        {/* ANALYSIS */}

        {stage === "analysis" && (

          <motion.div

            key="analysis"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <ReactorSequence />


          </motion.div>

        )}







        {/* COUNCIL */}

        {stage === "council" && (

          <motion.div

            key="council"

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

          >

            <Orbit />


            <Council />


          </motion.div>

        )}







        {/* IDEA CHAMBER */}

        {stage === "idea" && (

          <motion.div

            key="idea"

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

          >

            <Orbit />


            <IdeaChamber />


            <button

              onClick={showScore}

              className="
                block
                mx-auto
                mt-8
                px-8
                py-3
                rounded-xl
                border
                border-green-400
                text-green-300
                font-bold
              "

            >

              VIEW COUNCIL VERDICT 🚀

            </button>


          </motion.div>

        )}







        {/* SCORE */}

        {stage === "score" && (

          <motion.div

            key="score"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <ScoreCard />


          </motion.div>

        )}







        {/* MISSION LAB */}

        {stage === "mission" && (

          <motion.div

            key="mission"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <Labscene>


              <LabHUB />


              <Orbit />


              <Council />


              <IdeaChamber />


            </Labscene>


          </motion.div>

        )}



      </AnimatePresence>


    </main>

  );

}