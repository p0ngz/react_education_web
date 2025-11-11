import { createElement, createContext, useContext, useState } from "react";

const FirstContext = createContext();

export const FirstContextProvider = ({ children }) => {
  const [inputTxt, setInputTxt] = useState("");

  const inputTxtHandler = (value) => {
    setInputTxt(value);
  };
  return createElement(FirstContext.Provider, {
    value: {inputTxt, setInputTxt, inputTxtHandler},
    children,
  });
};

export const useFirstContext = () => {
  if (!useContext) {
    throw new Error("the component doest not inside FirstContextProvider");
  }
  return useContext(FirstContext);
};
