"use client";

import { useEffect } from "react";

export default function LabAudio() {

  useEffect(() => {

    const audio = new Audio("/sounds/reactor-hum.mp3");

    audio.loop = true;
    audio.volume = 0.25;


    const startAudio = () => {

      audio.play().catch(() => {
        console.log("Audio waiting for user interaction");
      });

      window.removeEventListener(
        "click",
        startAudio
      );

    };


    window.addEventListener(
      "click",
      startAudio
    );


    return () => {

      audio.pause();

      window.removeEventListener(
        "click",
        startAudio
      );

    };


  }, []);


  return null;

}