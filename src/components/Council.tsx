"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CouncilMember from "./CouncilMember";
import { councilMembers } from "../data/council";

export default function Council() {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCount((current) => {
        if (current >= councilMembers.length) {
          clearInterval(timer);
          return current;
        }

        return current + 1;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-8
        py-20
        relative
      "
    >

      <motion.h1
        initial={{
          opacity: 0,
          y: -30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-cyan-400
          tracking-widest
          mb-12
        "
      >
        🧪 COUNCIL NETWORK
      </motion.h1>


      <div
        className="
          w-full
          max-w-6xl
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        "
      >

        {councilMembers.map((member, index) => (
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
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            text-green-400
            font-bold
            text-xl
            tracking-widest
          "
        >
          ⚡ COUNCIL ASSEMBLED
        </motion.div>
      )}

    </section>
  );
}
