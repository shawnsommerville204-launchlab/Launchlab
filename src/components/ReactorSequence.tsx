"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const councilScan = [
  {
    icon: "🦈",
    name: "VANTAGE",
    task: "Analyzing market opportunity..."
  },
  {
    icon: "❤️",
    name: "PULSE",
    task: "Mapping customer demand..."
  },
  {
    icon: "⚙️",
    name: "FORGE",
    task: "Testing execution strategy..."
  },
  {
    icon: "📈",
    name: "ASCEND",
    task: "Calculating growth potential..."
  }
];


export default function ReactorSequence() {

  const [progress, setProgress] = useState(0);
  const [activeScan, setActiveScan] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setProgress((current) => {

        if(current >= 100){
          clearInterval(timer);
          return 100;
        }

        return current + 2;

      });

    },100);


    const scanner = setInterval(() => {

      setActiveScan((current)=>{

        if(current >= councilScan.length - 1){
          clearInterval(scanner);
          return current;
        }

        return current + 1;

      });

    },2500);


    return () => {
      clearInterval(timer);
      clearInterval(scanner);
    };


  },[]);



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


      <motion.div

        animate={{
          boxShadow:[
            "0 0 20px cyan",
            "0 0 80px cyan",
            "0 0 20px cyan"
          ]
        }}

        transition={{
          duration:2,
          repeat:Infinity
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
          text-6xl
        "

      >

        ⚡

      </motion.div>



      <h1
        className="
          mt-10
          text-4xl
          font-bold
          text-cyan-400
          tracking-widest
        "
      >

        REACTOR ANALYSIS

      </h1>



      <p className="
        mt-4
        text-gray-300
      ">

        LaunchLab Council is evaluating your idea

      </p>




      <div
        className="
          mt-10
          w-full
          max-w-xl
        "
      >

        <div
          className="
            h-4
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


        <div className="
          mt-3
          text-center
          text-cyan-300
          font-bold
        ">

          {progress}% COMPLETE

        </div>


      </div>




      <div className="mt-10 space-y-5">


        {councilScan.map((member,index)=>(

          <motion.div

            key={member.name}

            initial={{
              opacity:0,
              x:-40
            }}

            animate={{
              opacity:index <= activeScan ? 1 : .25,
              x:0
            }}

            className="
              flex
              items-center
              gap-4
              text-lg
            "

          >

            <span>
              {member.icon}
            </span>

            <div>

              <div className="
                text-cyan-300
                font-bold
              ">

                {member.name}

              </div>

              <div className="
                text-sm
                text-gray-400
              ">

                {member.task}

              </div>

            </div>


          </motion.div>


        ))}


      </div>



      {progress === 100 && (

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
            mt-12
            text-3xl
            text-green-400
            font-bold
          "

        >

          🚀 LAUNCH SCORE READY

        </motion.div>

      )}



    </motion.section>

  );

}
