import { useState, useEffect } from "react";

const useResize = (myRef) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    setWidth(myRef.current.clientWidth);
    setHeight(myRef.current.clientHeight);
  };

  useEffect(() => {
    myRef.current && myRef.current.addEventListener("resize", handleResize);

    return () => {
      myRef.current.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  console.log({ width, height });
  return { width, height };
};

export default useResize;
