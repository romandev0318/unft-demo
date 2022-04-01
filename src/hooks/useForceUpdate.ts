import { useState } from "react";

export const useForceUpdate = () => {
  const [_, setValue] = useState(0);

  return () =>
    setValue((value) => {
      console.log("rerendered");
      return value + 1;
    });
};
