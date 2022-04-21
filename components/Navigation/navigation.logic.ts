import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const useNavigation = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //PREVENT SCROLLING
  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuVisible]);

  return { currentPath: router.pathname, menuVisible, toggleMenu };
};
