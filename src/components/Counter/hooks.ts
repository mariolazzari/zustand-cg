import { create } from "zustand";
import { CounerStore } from "./CounterStore";

export const useStore = create<CounerStore>(set => ({
  count: 0,
  inc: () => set(state => ({ count: state.count + 1 })),
  dec: () => set(state => ({ count: state.count - 1 })),
}));
