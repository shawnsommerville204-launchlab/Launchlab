"use client";

import { useState } from "react";
import { motion } from "framer-motion";


export default function IdeaChamber() {

  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);


  function analyzeIdea() {

    if (!idea.trim()) return;

    setSubmitted(true);

  }


  return (

    <motion.section

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1
      }}

      className="
        max-w-4xl
        mx-auto
        mt-12
        p-8
        rounded-2xl
        border
        border-purple-400/40
        bg-black/70
        shadow-[0_0_40px_rgba(168,85,247,.25)]
      "

    >

      <h2
        className="
          text-3xl
          font-bold
          text-purple-400
          tracking-widest
          text-center
        "
      >

        🧬 IDEA CHAMBER

      </h2>


      <p
        className="
          mt-4
          text-center
          text-gray-300
        "
      >

        Submit your concept. The Council will begin analysis.

      </p>



      {!submitted ? (

        <>

          <textarea

            value={idea}

            onChange={(e)=>setIdea(e.target.value)}

            placeholder="
Describe your startup idea...
Example:
AI powered cleaning service platform
            "

            className="
              mt-8
              w-full
              h-40
              rounded-xl
              bg-black
              border
              border-purple-400/40
              p-5
              text-white
              outline-none
              focus:border-purple-400
            "

          />


          <motion.button

            onClick={analyzeIdea}

            whileHover={{
              scale:1.05
            }}

            className="
              mt-6
              w-full
              py-4
              rounded-xl
              bg-purple-500/20
              border
              border-purple-400
              text-purple-300
              font-bold
              tracking-widest
            "

          >

            ⚡ SEND TO COUNCIL

          </motion.button>

        </>


      ) : (

        <motion.div

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          className="
            mt-8
            text-center
          "

        >

          <div
            className="
              text-5xl
            "
          >
            ⚡
          </div>


          <h3
            className="
              mt-5
              text-2xl
              text-green-400
              font-bold
            "
          >

            REACTOR ANALYSIS STARTED

          </h3>


          <p
            className="
              mt-4
              text-gray-300
            "
          >

            The Council is evaluating:
            <br/>
            Market potential...
            <br/>
            Customer demand...
            <br/>
            Technical feasibility...
            <br/>
            Growth strategy...

          </p>


        </motion.div>

      )}

    </motion.section>

  );

}