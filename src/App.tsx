import { create } from "zustand";
import { Button } from "./components/ui/button";

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
};

const useStore = create<Store>(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
}));

function App() {
  const { count, dec, inc } = useStore();

  return (
    <div className="flex gap-8 p-4 items-center">
      <Button onClick={dec}>-</Button>
      <p className="text-sky-800 font-bold">{count}</p>
      <Button onClick={inc}>+</Button>
    </div>
  );
}

export default App;
