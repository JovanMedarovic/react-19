import { Dispatch, SetStateAction, FC } from 'react';

type CounterProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const Counter: FC<CounterProps> = ({ count, setCount }) => {
  return (
    <div>
      <h3>Counter Instance</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>{`${count}`}</button>
      <p></p>
    </div>
  );
};
