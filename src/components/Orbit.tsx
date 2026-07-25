"use client";

import { motion } from "framer-motion";


type OrbitProps = {
  stage?: string;
};


const messages: Record<string,string> = {

  boot:
    "Welcome, Founder. LaunchLab systems are initializing.",

  reactor:
    "Reactor core online. Power systems are stable.",

  analysis:
    "Council intelligence models are analyzing your concept.",

  council:
    "Four strategic minds are connected. Evaluation underway.",

  idea:
    "Your idea has entered the chamber. Preparing analysis.",

  score:
    "Mission complete. Your launch pathway has been calculated.",

  default:
    "Standing by. Awaiting founder command."

};



export default function Orbit({
  stage = "default"
}: OrbitProps) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:-30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1
      }}

      className="
        max-w-xl
        mx-auto
        p-6
        rounded-2xl
        border
        border-cyan-400/40
        bg-black/80
        shadow-[0_0_40px_rgba(0,255,255,.25)]
        text-center
      "

    >


      <motion.div

        animate={{

          rotate:360

        }}

        transition={{

          duration:10,

          repeat:Infinity,

          ease:"linear"

        }}

        className="
          text-5xl
        "

      >

        🛰️

      </motion.div>



      <h2

        className="
          mt-4
          text-cyan-400
          font-bold
          tracking-widest
          text-xl
        "

      >

        ORBIT AI

      </h2>



      <p

        className="
          mt-4
          text-gray-200
          text-lg
        "

      >

        {messages[stage]}

      </p>


    </motion.div>

  );

}