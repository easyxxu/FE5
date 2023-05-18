import React, { useState } from "react";
import { useEffect } from "react";

export default function useScroll() {
  const [isBottom, setIsBotton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBotton(
        document.documentElement.scrollTop + window.innerHeight >=
          document.documentElement.offsetHeight
      );
    });
  }, []);
  return isBottom;
}
