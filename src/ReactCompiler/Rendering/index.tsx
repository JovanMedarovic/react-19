import { useState } from "react";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";

export const Rerendering = () => {
  const [coutner1, setCounter1] = useState(0);
  const [coutner2, setCounter2] = useState(0);
  const titleSection = 'Rendering';
  return (
    <main>
      <Header text={`React Compiler - ${titleSection}`} />
      <Counter count={coutner1} setCount={setCounter1} />
      <Counter count={coutner2} setCount={setCounter2} />
    </main>
  );
};
