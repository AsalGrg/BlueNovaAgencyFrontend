import gsap from "gsap";
import { createContext, useContext, useRef } from "react";

export const ProcessCardAnimation = createContext(null);

export function ProcessCardAnimationProvider({ children }) {
  const timelineRef = useRef(gsap.timeline({ paused: true }));
  const animationTimeline = timelineRef.current;
  return (
    <ProcessCardAnimation.Provider value={animationTimeline}>
      {children}
    </ProcessCardAnimation.Provider>
  );
}
