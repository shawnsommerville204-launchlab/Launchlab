"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";


type LabTransitionProps = {
  message?: string;
  onComplete?: () => void;
};


export default function LabTransition({
  message = "Transferring to next chamber...",
  onComplete
}: LabTransitionProps) {


  const [progress, setProgress] = useState(0);


  useEffect(() => {


    const timer = setInterval(()=>{


      setProgress((current)=>{


        if(current >= 100){

          clearInterval(timer);

          if(onComplete){
            onComplete();
          }

          return 100;

        }


        return current + 5;

      });


    },100);


    return ()=>clearInterval(timer);


  },[onComplete]);



  return (

    <motion.section

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
        fixed
        inset-0
        z-50
        bg-black
        flex
        flex-col
        items-center
        justify-center
        text-white
      "

    >


      {/* Reactor Ring */}

      <motion.div

        animate={{
          rotate:360,
          boxShadow:[
            "0 0 20px cyan",
            "0 0 100px cyan",
            "0 0 20px cyan"
          ]
        }}

        transition={{
          rotate:{
            duration:4,
            repeat:Infinity,
            ease:"linear"
          },

          boxShadow:{
            duration:2,
            repeat:Infinity
          }
        }}

        className="
          w-56
          h-56
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
          text-3xl
          text-cyan-400
          font-bold
          tracking-widest
        "

      >

        ORBIT TRANSFER

      </h1>



      <p

        className="
          mt-4
          text-gray-300
        "

      >

        🛰️ {message}

      </p>





      {/* Progress */}

      <div

        className="
          mt-8
          w-80
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



      <p

        className="
          mt-3
          text-cyan-300
        "

      >

        {progress}% SYSTEM TRANSFER

      </p>


    </motion.section>

  );

}