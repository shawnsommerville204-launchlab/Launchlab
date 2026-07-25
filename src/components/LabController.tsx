"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import BootSequence from "./BootSequence";
import ReactorCore from "./ReactorCore";
import ReactorSequence from "./ReactorSequence";
import Council from "./Council";
import Orbit from "./Orbit";
import IdeaChamber from "./IdeaChamber";
import LabHUB from "./LabHUB";
import Labscene from "./Labscene";
import ScoreCard from "./ScoreCard";
import LabAudio from "./LabAudio";

type LabStage =
 | "boot"
 | "reactor"
 | "analysis"
 | "council"
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
    }, 8500);


    setTimeout(() => {
      setStage("score");
    }, 12000);

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
<LabAudio />

      <AnimatePresence mode="wait">


        {/* BOOT SEQUENCE */}

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

            transition={{
              duration:1
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
                bg-black/80
                shadow-[0_0_40px_rgba(0,255,255,.7)]
                z-50
              "

            >

              ENTER LAUNCHLAB ⚡

            </motion.button>


          </motion.div>

        )}




        {/* REACTOR ACTIVATION */}

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


              <motion.h1

                animate={{
                  opacity:[
                    .3,
                    1,
                    .3
                  ]
                }}

                transition={{
                  duration:2,
                  repeat:Infinity
                }}

                className="
                  mt-8
                  text-4xl
                  text-cyan-400
                  font-bold
                  tracking-widest
                "

              >

                REACTOR ONLINE

              </motion.h1>


            </div>


          </motion.div>

        )}






        {/* AI ANALYSIS */}

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






        {/* COUNCIL AWAKENING */}

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





{stage === "score" && (

  <ScoreCard />

)}

        {/* MAIN LAB */}

        {stage === "mission" && (

          <motion.div

            key="mission"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            transition={{
              duration:1
            }}

          >

            <Labscene>


              <LabHUB />


              <Orbit />


              <IdeaChamber />


              <Council />


            </Labscene>


          </motion.div>

        )}


      </AnimatePresence>


    </main>

  );

}