"use client";

import { motion } from "framer-motion";

export default function LabHUD() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      <div className="flex justify-between items-center p-6 text-cyan-400 text-sm font-mono">

        <div>
          <div>LAUNCHLAB OS v1.0</div>
          <div className="text-green-400">SYSTEM STATUS: ONLINE</div>
        </div>

        <div className="text-right">
          <div>REACTOR: 100%</div>
          <div>COUNCIL: CONNECTED</div>
        </div>

      </div>

      <div className="h-px bg-cyan-400/30" />
    </motion.div>
  );
}