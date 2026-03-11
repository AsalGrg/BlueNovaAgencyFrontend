'use client'
import { useContext, useState } from "react";
import { createContext } from "react";

export const AnimationCompleteContext = createContext(null);

export const AnimationCompleteProvider = ({ children }) => {
  const [complete, setcomplete] = useState(false);

  return (
    <AnimationCompleteContext.Provider value={{ setcomplete, complete }}>
      {children}
    </AnimationCompleteContext.Provider>
  );
};

// custom hook to use context.

export const useAnimationCompleteContext = () => {
  const ctx = useContext(AnimationCompleteContext);
  if (!ctx) throw new Error("useCount must be used inside <CountProvider>");
  return ctx;
};
