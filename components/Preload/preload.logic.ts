import { useState, useEffect } from "react";

import { useDelay } from "hooks/useDelay";

export const usePreload = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  const loadingVisible = useDelay(firstLoad, 400);

  //ON FIRST LOAD
  useEffect(() => {
    setFirstLoad(false);
    // eslint-disable-next-line
  }, []);

  return { firstLoad, loadingVisible };
};
