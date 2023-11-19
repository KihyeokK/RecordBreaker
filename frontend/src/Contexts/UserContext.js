import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [user, setUser] = useState("");

  return (
    <>
      {/* Anything passed into value can be used by the children of this Provider */}
      <UserContext.Provider
        value={{ user, setUser }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};
