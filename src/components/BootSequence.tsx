"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "LAUNCHLAB OS INITIALIZING...",
  "⚡ POWER CORE ONLINE",
  "🧠 AI NETWORK CONNECTING...",
  "🦈 INVESTOR COUNCIL ONLINE",
  "❤️ CUSTOMER COUNCIL ONLINE",
  "⚙️ BUILDER COUNCIL ONLINE",
  "📈 GROWTH COUNCIL ONLINE",
  "SYSTEM READY",
  "WELCOME, FOUNDER."
];


export default function BootSequence() {

  const [index, setIndex] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setIndex((current)=>{

        if(current >= messages.length - 1){
          clearInterval(timer);
          return current;
        }

        return current + 1;

      });

    },1200);


    return ()=>clearInterval(timer);

  },[]);


  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-black
      "
    >

      <motion.div

        key={messages[index]}

        initial={{
          opacity:0,
          y:20
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
        text-2xl
        md:text-4xl
        text-cyan-400
        font-bold
        text-center
        "
      >

        {messages[index]}

      </motion.div>


    </section>

  );

}