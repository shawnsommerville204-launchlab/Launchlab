"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LabTransition from "./LabTransition";
import Orbit from "./Orbit";
import IdeaChamber from "./IdeaChamber";
import ReactorSequence from "./ReactorSequence";
import ReactorCore from "./ReactorCore";
import Council from "./Council";
import ScoreCard from "./ScoreCard";
import BootSequence from "./BootSequence";


type LabStage =
  | "boot"
  | "reactor"
  | "transition"
  | "analysis"
  | "council"
  | "idea"
  | "score";


export default function LabController() {


  const [stage, setStage] = useState<LabStage>("boot");

  const [nextStage, setNextStage] =
    useState<LabStage>("reactor");



  function moveTo(stageName: LabStage) {

    setNextStage(stageName);

    setStage("transition");

  }



  function startLab() {

    moveTo("reactor");

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



        {/* BOOT SCREEN */}

        {stage === "boot" && (

          <motion.div

            key="boot"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            exit={{
              opacity:0,
              scale:1.2
            }}

            className="
              min-h-screen
            "

          >

            <BootSequence />


            <button

              onClick={startLab}

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

            </button>


          </motion.div>

        )}







        {/* TRANSITION */}

        {stage === "transition" && (

          <LabTransition

            message={
              nextStage === "analysis"
              ?
              "Moving to Reactor Analysis Chamber..."
              :
              nextStage === "council"
              ?
              "Connecting Council Intelligence..."
              :
              nextStage === "idea"
              ?
              "Opening Idea Chamber..."
              :
              "Initializing Reactor..."
            }


            onComplete={()=>{

              setStage(nextStage);

            }}

          />

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
              flex-col
              items-center
              justify-center
            "

          >

            <Orbit stage="reactor" />


            <ReactorCore />


            <button

              onClick={()=>moveTo("analysis")}

              className="
                mt-10
                px-8
                py-3
                border
                border-cyan-400
                rounded-xl
                text-cyan-300
              "

            >

              START ANALYSIS ⚡

            </button>


          </motion.div>

        )}









        {/* REACTOR ANALYSIS */}

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

            <Orbit stage="analysis" />


            <ReactorSequence />


            <button

              onClick={()=>moveTo("council")}

              className="
                block
                mx-auto
                mt-8
                px-8
                py-3
                border
                border-purple-400
                rounded-xl
                text-purple-300
              "

            >

              CONNECT COUNCIL 🧠

            </button>


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

            <Orbit stage="council" />


            <Council />


            <button

              onClick={()=>moveTo("idea")}

              className="
                block
                mx-auto
                mt-8
                px-8
                py-3
                border
                border-green-400
                rounded-xl
                text-green-300
              "

            >

              ENTER IDEA CHAMBER 🧬

            </button>


          </motion.div>

        )}









        {/* IDEA CHAMBER */}

        {stage === "idea" && (

          <motion.div

            key="idea"

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

          >

            <Orbit stage="idea" />


            <IdeaChamber />


            <button

              onClick={()=>setStage("score")}

              className="
                block
                mx-auto
                mt-8
                px-8
                py-3
                border
                border-cyan-400
                rounded-xl
                text-cyan-300
              "

            >

              VIEW LAUNCH REPORT 🚀

            </button>


          </motion.div>

        )}









        {/* SCORECARD */}

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

            <Orbit stage="score" />


            <ScoreCard />


          </motion.div>

        )}



      </AnimatePresence>


    </main>

  );

}