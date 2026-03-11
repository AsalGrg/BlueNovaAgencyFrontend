"use client";

import Hero from "../components/hero/Hero";
import TextReveal from "../components/TextReveal";
import Services from '@/components/services/Services'
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
  }, []);



  return (
    <div className="">
      <Hero />
      <TextReveal />
      <Services/>
    </div>
  );
}
