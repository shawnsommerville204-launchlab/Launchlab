"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BootSequence from "./BootSequence";
import Labscene from "./Labscene";
import LabHUB from "./LabHUB";
import ReactorCore from "./ReactorCore";
import Council from "./Council";

export default function LabController() {

  const [stage, setStage] = useState<
    "boot" | "opening" | "lab"
  >("boot");


  function enterLab() {

    setStage("opening");

    setTimeout(() => {
      setStage("lab");
    }, 2500);

  }


  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      <AnimatePresence mode="wait">


        {/* BOOT CHAMBER */}

        {stage === "boot" && (

          <motion.div

            key="boot"

            initial={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
              scale: 1.15,
            }}

            transition={{
              duration: 1,
            }}

          >

            <BootSequence />


            <motion.button

              onClick={enterLab}

              whileHover={{
                scale: 1.08,
              }}

              whileTap={{
                scale: 0.95,
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
                bg-black/80
                text-cyan-400
                font-bold
                tracking-widest
                shadow-[0_0_30px_rgba(6,182,212,.7)]
                hover:bg-cyan-400
                hover:text-black
                transition-all
                z-50
              "

            >

              ENTER LAUNCHLAB ⚡

            </motion.button>


          </motion.div>

        )}



        {/* ACCESS SEQUENCE */}

        {stage === "opening" && (

          <motion.div

            key="opening"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              min-h-screen
              flex
              items-center
              justify-center
              bg-black
            "

          >

            <motion.div

              animate={{
                scale:[
                  1,
                  1.05,
                  1
                ],
              }}

              transition={{
                duration:1.5,
                repeat:Infinity,
              }}

              className="text-center"

            >

              <h1 className="
                text-5xl
                font-bold
                text-cyan-400
              ">
                ⚡ ACCESS GRANTED
              </h1>


              <p className="
                mt-6
                text-cyan-200
                text-xl
              ">
                Initializing LaunchLab OS...
              </p>


            </motion.div>


          </motion.div>

        )}



        {/* MAIN LAB */}

        {stage === "lab" && (

          <motion.div

            key="lab"

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            transition={{
              duration:1,
            }}

          >

            <Labscene>

              <LabHUB />

              <ReactorCore />

              <Council />

            </Labscene>


          </motion.div>

        )}


      </AnimatePresence>

    </main>

  );

}