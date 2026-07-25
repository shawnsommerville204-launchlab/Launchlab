"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type LabSceneProps = {
  children: ReactNode;
};

export default function LabScene({ children }: LabSceneProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,.15),transparent_70%)]" />

      {/* Grid Floor */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(rgba(6,182,212,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.12)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* Reactor Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500
          blur-[180px]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}