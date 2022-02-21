import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  }, []);

  return <p>{count}</p>;
}
