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
