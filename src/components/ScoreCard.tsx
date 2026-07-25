"use client";

import { motion } from "framer-motion";
import { launchScore, currentIdea } from "../data/LabState";


export default function ScoreCard() {


  const score = launchScore || 50;


  let recommendation = "Needs More Analysis";


  if(score >= 85){

    recommendation = "🚀 BUILD MVP";

  } 
  else if(score >=70){

    recommendation = "⚡ REFINE & TEST";

  }
  else {

    recommendation = "🧪 RESEARCH FURTHER";

  }



  return (

    <main

      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        p-8
      "

    >

      <motion.section

        initial={{
          opacity:0,
          scale:.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

        className="
          max-w-3xl
          w-full
          rounded-3xl
          border
          border-cyan-400/40
          bg-black/80
          p-10
          text-center
          shadow-[0_0_60px_rgba(0,255,255,.25)]
        "

      >


        <div className="text-6xl">
          🏆
        </div>


        <h1

          className="
            mt-6
            text-4xl
            text-cyan-400
            font-bold
            tracking-widest
          "

        >

          LAUNCH REPORT

        </h1>



        <p className="
          mt-8
          text-gray-400
        ">

          FOUNDER CONCEPT

        </p>


        <div

          className="
            mt-3
            text-xl
            text-white
          "

        >

          {currentIdea || "No idea submitted"}

        </div>




        <div

          className="
            mt-10
            text-8xl
            text-green-400
            font-bold
          "

        >

          {score}

        </div>


        <p className="
          text-cyan-300
          tracking-widest
        ">

          /100 LAUNCH POTENTIAL

        </p>




        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:1
          }}

          className="
            mt-10
            border
            border-green-400/40
            rounded-xl
            p-6
          "

        >

          <h2 className="
            text-2xl
            text-green-400
            font-bold
          ">

            COUNCIL RECOMMENDATION

          </h2>


          <p className="
            mt-4
            text-xl
          ">

            {recommendation}

          </p>


        </motion.div>




      </motion.section>


    </main>

  );

}