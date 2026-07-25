"use client";

import { motion } from "framer-motion";

interface CouncilMemberProps {
  icon: string;
  title: string;
  role: string;
  name: string;
  mission: string;
  active?: boolean;
}

export default function CouncilMember({
  icon,
  title,
  role,
  name,
  mission,
  active = false,
}: CouncilMemberProps) {

  return (
    <motion.div

      initial={{
        opacity: 0,
        scale: 0.8,
        y: 40,
      }}

      animate={{
        opacity: active ? 1 : 0.35,

        scale: active ? 1 : 0.95,

        y: 0,

        boxShadow: active
          ? "0 0 45px rgba(6,182,212,0.7)"
          : "0 0 15px rgba(6,182,212,0.15)",
      }}

      transition={{
        duration: 0.8,
      }}

      whileHover={{
        scale: 1.05,
      }}

      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/30
        bg-black/70
        backdrop-blur
        p-8
      "
    >

      {/* Status Glow */}
      {active && (
        <div
          className="
            absolute
            inset-0
            bg-cyan-400/10
            animate-pulse
          "
        />
      )}


      <div className="relative z-10">

        <div className="text-5xl">
          {icon}
        </div>


        <h2
          className="
            mt-5
            text-2xl
            font-bold
            text-cyan-400
            tracking-widest
          "
        >
          {title}
        </h2>


        <p
          className="
            mt-2
            text-cyan-200
            text-sm
          "
        >
          {role}
        </p>


        <h3
          className="
            mt-3
            text-white
            text-lg
          "
        >
          {name}
        </h3>


        <p
          className="
            mt-5
            text-gray-400
            leading-relaxed
          "
        >
          {mission}
        </p>


        <div
          className={`
            mt-6
            text-sm
            font-bold
            tracking-widest
            ${
              active
              ? "text-green-400"
              : "text-gray-500"
            }
          `}
        >

          {active
            ? "🟢 ONLINE"
            : "⚪ STANDBY"}

        </div>


      </div>

    </motion.div>
  );
}