# Zustand by CodeGenix

YouTube [video](https://www.youtube.com/watch?v=AYO4qHAnLQI)

## Basic example

```tsx
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
```