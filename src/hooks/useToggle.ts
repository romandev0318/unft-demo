import { useState } from "react";

export const useToggle = (
  defaultState = false
): [boolean, () => void, typeof setState] => {
  const [state, setState] = useState(defaultState);

  const toggle = () => setState((state) => !state);

  return [state, toggle, setState];
};
