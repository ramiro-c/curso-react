import React, { createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = (props) => {
  return (
    <ModalContext.Provider value={{}}>{props.children}</ModalContext.Provider>
  );
};

export default ModalProvider;
