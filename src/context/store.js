import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const Context = createContext();

const Store = ({ children }) => {
  const initialState = {
    // breed: {
    //   name: "",
    //   description: "",
    //   temperament: [],
    //   origin: "",
    //   lifeSpan: "",
    //   profileImage: "",
    //   images: [],
    //   searchCount: 0,
    //   traits: {
    //     adaptability: 0,
    //     affectionLevel: 0,
    //     childFriendly: 0,
    //     grooming: 0,
    //     intelligence: 0,
    //     healthIssues: 0,
    //     socialNeeds: 0,
    //     strangerFriendly: 0,
    //   },
    // },
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
