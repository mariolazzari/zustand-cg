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
```

## Slice

```ts
type UserState = {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
};

type UserActions = {
  setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;
```