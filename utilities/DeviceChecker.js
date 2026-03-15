"use client";
import { useEffect, useState } from "react";

export default function useDeviceType() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setDevice("mobile");
      } else if (width >= 500 && width < 1450) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    checkDevice(); // run on first load

    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
