import { useEffect, useRef } from "react";

export const usePublicLayout = () => {
  //SCROLL SETUP
  const headerRef = useRef<HTMLDivElement>(null);
  let lastScroll = 0;
  const scrollEvent = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      headerRef.current?.classList.remove("scroll-up");
      return;
    }
    if (
      currentScroll > lastScroll &&
      !headerRef.current?.classList.contains("scroll-down")
    ) {
      headerRef.current?.classList.remove("scroll-up");
      headerRef.current?.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      headerRef.current?.classList.contains("scroll-down")
    ) {
      headerRef.current?.classList.remove("scroll-down");
      headerRef.current?.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  };

  //SCROLL EVENT
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
    // eslint-disable-next-line
  }, []);

  return { headerRef };
};
