"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CouncilMember from "./CouncilMember";
import { councilMembers } from "../data/council";


export default function Council() {

  const [activeCount, setActiveCount] = useState(0);


  useEffect(() => {

    const timer = setInterval(() => {

      setActiveCount((current)=>{

        if(current >= councilMembers.length){

          clearInterval(timer);
          return current;

        }

        return current + 1;

      });


    },1800);


    return ()=>clearInterval(timer);


  },[]);



  return (

    <section
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        p-8
      "
    >


      <motion.h1

        initial={{
          opacity:0,
          y:-40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        className="
          text-5xl
          font-bold
          text-cyan-400
          tracking-widest
          mb-12
        "

      >

        🧠 COUNCIL NETWORK

      </motion.h1>




      <div
        className="
          grid
          md:grid-cols-2
          gap-8
          max-w-6xl
          w-full
        "
      >

        {councilMembers.map((member,index)=>(


          <CouncilMember

            key={member.id}

            icon={member.icon}

            title={member.title}

            role={member.role}

            name={member.name}

            mission={member.mission}

            active={index < activeCount}

          />


        ))}


      </div>




      {activeCount === councilMembers.length && (

        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          className="
            mt-12
            text-green-400
            text-2xl
            font-bold
            tracking-widest
          "

        >

          ⚡ ALL COUNCIL SYSTEMS ONLINE

        </motion.div>

      )}


    </section>

  );

}

