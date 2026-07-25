"use client";

import { motion } from "framer-motion";


type CouncilMemberProps = {
  icon: string;
  title: string;
  role: string;
  name: string;
  mission: string;
  active: boolean;
};


export default function CouncilMember({
  icon,
  title,
  role,
  name,
  mission,
  active,
}: CouncilMemberProps) {


  return (

    <motion.div

      initial={{
        opacity:0,
        scale:.8
      }}

      animate={{
        opacity: active ? 1 : .35,
        scale: active ? 1 : .95
      }}

      transition={{
        duration:.8
      }}

      className={`
        relative
        p-8
        rounded-2xl
        border
        ${
          active
          ?
          "border-cyan-400 shadow-[0_0_35px_rgba(0,255,255,.35)]"
          :
          "border-gray-700"
        }
        bg-black/70
      `}

    >

      {active && (

        <motion.div

          animate={{
            opacity:[0.3,1,0.3]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="
            absolute
            inset-0
            rounded-2xl
            border
            border-cyan-400
            pointer-events-none
          "

        />

      )}



      <div className="
        relative
        z-10
      ">


        <div className="
          text-5xl
        ">

          {icon}

        </div>


        <h2 className="
          mt-5
          text-2xl
          font-bold
          text-cyan-300
        ">

          {name}

        </h2>


        <p className="
          text-sm
          uppercase
          tracking-widest
          text-gray-400
        ">

          {role}

        </p>



        <div className="
          mt-5
          flex
          items-center
          gap-2
        ">

          <span
            className={`
              h-3
              w-3
              rounded-full
              ${
                active
                ?
                "bg-green-400"
                :
                "bg-gray-600"
              }
            `}
          />

          <span className="
            text-sm
            text-green-300
          ">

            {active
              ? "ONLINE"
              : "STANDBY"
            }

          </span>

        </div>



        <p className="
          mt-5
          text-gray-300
          leading-relaxed
        ">

          {mission}

        </p>


      </div>


    </motion.div>

  );

}