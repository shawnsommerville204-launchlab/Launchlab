"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Orbit from "./Orbit";
import BootSequence from "./BootSequence";
import ReactorCore from "./ReactorCore";
import Council from "./Council";
import IdeaChamber from "./IdeaChamber";
import LabHUB from "./LabHUB";
import Labscene from "./Labscene";


type LabStage =
  | "boot"
  | "reactor"
  | "council"
  | "mission";


export default function LabController() {

  const [stage, setStage] = useState<LabStage>("boot");


  function startLaunchLab() {

    setStage("reactor");


    setTimeout(() => {
      setStage("council");
    }, 3500);


    setTimeout(() => {
      setStage("mission");
    }, 7500);

  }


  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">

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
                shadow-[0_0_35px_rgba(0,255,255,.7)]
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


              <motion.h1

                animate={{
                  opacity:[0,1,0]
                }}

                transition={{
                  duration:2,
                  repeat:Infinity
                }}

                className="
                  mt-8
                  text-cyan-400
                  text-3xl
                  font-bold
                  tracking-widest
                "

              >

                REACTOR ONLINE

              </motion.h1>


            </div>


          </motion.div>

        )}




        {/* COUNCIL */}

        {stage === "council" && (

          <motion.div

            key="council"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <Council />

          </motion.div>

        )}





        {/* MISSION CONTROL */}

        {stage === "mission" && (

          <motion.div

            key="mission"

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            className="
              min-h-screen
            "

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