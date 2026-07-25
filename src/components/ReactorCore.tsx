"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ReactorCore() {

  const [power, setPower] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setPower((current) => {

        if (current >= 100) {
          clearInterval(timer);
          return 100;
        }

        return current + 10;

      });

    }, 300);


    return () => clearInterval(timer);

  }, []);



  return (

    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        py-20
      "
    >

      <h2
        className="
          text-3xl
          font-bold
          text-cyan-400
          mb-8
        "
      >
        ⚡ REACTOR CORE
      </h2>



      <motion.div

        animate={{
          scale:[1,1.08,1],
          rotate:360,
        }}

        transition={{
          duration:3,
          repeat:Infinity,
        }}

        className="
          w-48
          h-48
          rounded-full
          border-4
          border-cyan-400
          flex
          items-center
          justify-center
          shadow-[0_0_60px_rgba(6,182,212,0.8)]
        "

      >

        <div
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          {power}%
        </div>


      </motion.div>



      <p
        className="
          mt-8
          text-green-400
        "
      >

        {power < 100
          ? "⚡ Charging Systems..."
          : "🟢 Reactor Online"}

      </p>


    </div>

  );

}