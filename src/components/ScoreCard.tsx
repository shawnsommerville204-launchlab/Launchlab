"use client";

import { motion } from "framer-motion";


const scores = [
  {
    icon: "🦈",
    name: "VANTAGE",
    score: 92,
    category: "Market Strategy",
  },
  {
    icon: "❤️",
    name: "PULSE",
    score: 88,
    category: "Customer Fit",
  },
  {
    icon: "⚙️",
    name: "FORGE",
    score: 91,
    category: "Execution",
  },
  {
    icon: "📈",
    name: "ASCEND",
    score: 89,
    category: "Growth Potential",
  },
];


export default function ScoreCard() {

  const totalScore = Math.round(
    scores.reduce((sum, item)=>sum + item.score,0)
    / scores.length
  );


  return (

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
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-black
        text-white
        p-8
      "

    >

      <h1
        className="
          text-4xl
          text-cyan-400
          font-bold
          tracking-widest
        "
      >
        COUNCIL VERDICT
      </h1>



      <div
        className="
          mt-10
          grid
          md:grid-cols-2
          gap-6
          max-w-4xl
          w-full
        "
      >

        {scores.map((member,index)=>(

          <motion.div

            key={member.name}

            initial={{
              opacity:0,
              x:-30
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              delay:index*.3
            }}

            className="
              p-6
              rounded-xl
              border
              border-cyan-400/30
              bg-black/70
              shadow-[0_0_25px_rgba(0,255,255,.2)]
            "

          >

            <div className="text-3xl">
              {member.icon}
            </div>


            <h2
              className="
                mt-3
                text-xl
                text-cyan-300
                font-bold
              "
            >
              {member.name}
            </h2>


            <p className="text-gray-400">
              {member.category}
            </p>


            <div
              className="
                mt-4
                text-3xl
                font-bold
                text-green-400
              "
            >
              {member.score}%
            </div>


          </motion.div>

        ))}

      </div>




      <motion.div

        initial={{
          opacity:0,
          y:50
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:1.5
        }}

        className="
          mt-12
          text-center
        "

      >

        <p
          className="
            text-gray-400
            tracking-widest
          "
        >
          FINAL LAUNCH SCORE
        </p>


        <div
          className="
            text-7xl
            font-bold
            text-cyan-400
            mt-4
          "
        >

          {totalScore}

        </div>


        <p
          className="
            mt-6
            text-green-400
            text-xl
            font-bold
          "
        >

          🚀 PROTOTYPE RECOMMENDED

        </p>


      </motion.div>


    </motion.section>

  );

}