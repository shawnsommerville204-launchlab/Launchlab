"use client";

import { motion } from "framer-motion";

export default function Orbit() {

  return (

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
        duration:1
      }}

      className="
        max-w-3xl
        mx-auto
        mt-10
        p-8
        rounded-2xl
        border
        border-cyan-400/40
        bg-black/70
        shadow-[0_0_40px_rgba(0,255,255,.25)]
        text-center
      "

    >

      <motion.div

        animate={{
          rotate:360
        }}

        transition={{
          duration:12,
          repeat:Infinity,
          ease:"linear"
        }}

        className="
          text-6xl
          mb-6
        "

      >

        🛰️

      </motion.div>


      <h2
        className="
          text-3xl
          font-bold
          text-cyan-400
          tracking-widest
        "
      >
        ORBIT ONLINE
      </h2>


      <p
        className="
          mt-6
          text-cyan-100
          text-lg
          leading-relaxed
        "
      >

        Welcome, Founder.
        <br />
        The LaunchLab Council has been activated.
        <br />
        Your mission is ready for analysis.

      </p>


      <div
        className="
          mt-8
          text-green-400
          font-bold
          tracking-widest
        "
      >

        🟢 COMMAND SYSTEM READY

      </div>


    </motion.div>

  );

}