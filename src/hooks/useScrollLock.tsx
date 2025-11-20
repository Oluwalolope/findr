import { useEffect } from "react";

const useScrollLock = (locked: boolean) => {
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (locked) {
      // prevent scrolling vertically and horizontally
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      // restore scroll
      body.style.overflow = "";
      html.style.overflow = "";
    }
  }, [locked]);
};

export default useScrollLock;