import { useEffect, useState } from "react";

//use defered value
export const useDebounce = (value, delay) => {
  const [output, setOutput] = useState(value);
  useEffect(() => {}, [output]);
  return output;
};
