import { EffectCallback, useEffect } from "react";

/*eslint-disable react-hooks/exhaustive-deps */
export const useEffectOnlyOnce = (func: EffectCallback) =>
  useEffect(() => {
    func();
  }, []);

export default useEffectOnlyOnce;
