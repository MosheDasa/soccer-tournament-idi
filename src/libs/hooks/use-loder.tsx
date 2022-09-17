import { useState } from "react";

function useLoderer() {
  const [loder, setLoder] = useState<Boolean>(false);

  return {
    loder,
    setLoder,
  };
}

export default useLoderer;
