import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const incrementa = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrementa = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const resetta = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, incrementa, decrementa, resetta };
}
