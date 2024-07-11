// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMemo, useState } from "react";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";
import { superSlowMethod } from "./utils";

export const Compiler = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);

  const titleSection = "React Compiler";
  const a = 10000;
  const b = 100000;

  // const superSlowResult = superSlowMethod(a, b);
  const superSlowResult = useMemo(() => superSlowMethod(a, b), [a,b]);

  return (
    <main>
      <Header text={titleSection} />
      <Counter count={counter1} setCount={setCounter1} />
      <Counter count={counter2} setCount={setCounter2} />
      <Counter count={counter3} setCount={setCounter3} />
      <Counter count={counter4} setCount={setCounter4} />

      <p>Super slow result is: {superSlowResult}</p>
    </main>
  );
};
