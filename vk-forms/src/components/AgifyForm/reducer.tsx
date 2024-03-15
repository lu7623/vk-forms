type User = {
  name: string,
  age: number
  }
type State = User[]

type Action = {
  type: string;
  payload:  User;
};

export const initialState = []

export const reducer = (state:State, action:Action) => {
  switch (action.type) {
    case "addName":
      return [...state, action.payload];
    default:
      throw new Error("Wrong action");
  }
};


