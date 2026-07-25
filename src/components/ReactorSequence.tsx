"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { calculateScore } from "../data/LabState";


const scans = [
  {
    icon: "🦈",
    name: "VANTAGE",
    message: "Analyzing market opportunity..."
  },
  {
    icon: "❤️",
    name: "PULSE",
    message: "Mapping customer demand..."
  },
  {
    icon: "⚙️",
    name: "FORGE",
    message: "Testing execution strategy..."
  },
  {
    icon: "📈",
    name: "ASCEND",
    message: "Calculating growth potential..."
  }
];


export default function ReactorSequence() {

  const [progress, setProgress] = useState(0);
  const [activeScan, setActiveScan] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {


    const progressTimer = setInterval(() => {


      setProgress((current) => {


        if (current >= 100) {

          clearInterval(progressTimer);

          return 100;

        }


        return current + 2;

      });


    }, 100);



    const scanTimer = setInterval(() => {


      setActiveScan((current) => {


        if (current >= scans.length - 1) {

          clearInterval(scanTimer);

          return current;

        }


        return current + 1;

      });


    }, 2500);



    return () => {

      clearInterval(progressTimer);

      clearInterval(scanTimer);

    };


  }, []);




  useEffect(() => {

    if (progress === 100) {

      const finalScore = calculateScore();

      setScore(finalScore);

    }

  }, [progress]);




  return (

    <section

      className="
        min-h-screen
        bg-black
        text-white
        flex
        flex-col
        items-center
        justify-center
        p-8
      "

    >


      {/* Reactor Core */}

      <motion.div

        animate={{

          boxShadow: [
            "0 0 20px cyan",
            "0 0 90px cyan",
            "0 0 20px cyan"
          ]

        }}

        transition={{

          duration:2,

          repeat:Infinity

        }}

        className="
          w-52
          h-52
          rounded-full
          border-4
          border-cyan-400
          flex
          items-center
          justify-center
          text-7xl
        "

      >

        ⚡

      </motion.div>




      <h1

        className="
          mt-10
          text-4xl
          text-cyan-400
          font-bold
          tracking-widest
        "

      >

        REACTOR ANALYSIS

      </h1>



      <p className="text-gray-400 mt-3">

        LaunchLab Council intelligence active

      </p>




      {/* Progress Bar */}

      <div className="mt-10 w-full max-w-xl">


        <div

          className="
            h-5
            bg-gray-800
            rounded-full
            overflow-hidden
          "

        >

          <motion.div

            animate={{

              width:`${progress}%`

            }}

            className="
              h-full
              bg-cyan-400
            "

          />

        </div>


        <div

          className="
            text-center
            mt-3
            text-cyan-300
            font-bold
          "

        >

          {progress}% COMPLETE

        </div>


      </div>





      {/* Council Scans */}

      <div className="mt-10 space-y-6">


        {scans.map((scan,index)=>(


          <motion.div

            key={scan.name}

            animate={{

              opacity:index <= activeScan ? 1 : .25,

              x:index <= activeScan ? 0 : -20

            }}

            className="
              flex
              items-center
              gap-5
            "

          >

            <div className="text-4xl">

              {scan.icon}

            </div>


            <div>


              <h2

                className="
                  text-cyan-300
                  font-bold
                  tracking-widest
                "

              >

                {scan.name}

                {index <= activeScan && " ONLINE"}

              </h2>


              <p className="text-gray-400">

                {scan.message}

              </p>


            </div>


          </motion.div>


        ))}


      </div>





      {/* Score Reveal */}

      {progress === 100 && score > 0 && (

        <motion.div

          initial={{

            opacity:0,

            scale:.5

          }}

          animate={{

            opacity:1,

            scale:1

          }}

          className="
            mt-12
            text-center
          "

        >

          <h2

            className="
              text-green-400
              text-3xl
              font-bold
              tracking-widest
            "

          >

            🚀 LAUNCH SCORE READY

          </h2>



          <div

            className="
              text-8xl
              text-cyan-400
              font-bold
              mt-5
            "

          >

            {score}

          </div>



          <p className="text-gray-400 mt-4">

            Council recommendation generated

          </p>


        </motion.div>

      )}



    </section>

  );

}