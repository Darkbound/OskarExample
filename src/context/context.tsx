import { createContext, useContext as useReactContext, useReducer } from "react";

import { initialState } from "~/data";
import { ContextValues } from "~/types";

import { reducer } from "./reducer";

const Context = createContext<ContextValues>({
  dispatch: () => null,
  state: initialState,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ dispatch, state }}>{children}</Context.Provider>;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useContext = () => useReactContext(Context);
