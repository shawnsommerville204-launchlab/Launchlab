"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LabController from "../components/LabController";

export default function Home() {

  return (

    <main className="
      min-h-screen
      bg-black
      text-white
      overflow-hidden
    ">

      <Navbar />

      <Hero />

      <LabController />

    </main>

  );

}