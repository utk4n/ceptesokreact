import { useState } from "react";

const useStateChanger = () => {
  const [state, setState] = useState(false);
  const stateHandle = () => {
    setState((prev) => !prev);
  };

  return { state, stateHandle };
};

export default useStateChanger;
