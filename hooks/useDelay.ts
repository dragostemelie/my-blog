import React, { useState, useEffect } from "react";

export function useDelay<T>(value: T, delay: number) {
  const [val, setVal] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setVal(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return val;
}
