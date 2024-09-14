import { Button } from "../ui/button";
import { useStore } from "./hooks";

function Counter() {
  const { count, dec, inc } = useStore();

  return (
    <div className="flex gap-8 p-4 items-center">
      <Button onClick={dec}>-</Button>
      <p className="text-sky-800 font-bold">{count}</p>
      <Button onClick={inc}>+</Button>
    </div>
  );
}

export default Counter;
