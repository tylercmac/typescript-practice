import React from "react";

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favorites: [],
};
export const Store = React.createContext<IState | any >(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}
