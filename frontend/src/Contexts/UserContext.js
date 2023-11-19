import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

// default user for now
const defaultUser = {
  _id: "655937465b2c3b2b3317f00f",
  userName: "d_zhang2",
  password: "123456",
  name: "Daniel Zhang",
  numDiscs: 0,
  numFriends: 0,
  numGoldenDiscs: 0,
  password: "123456",
  userName: "d_zhang2",
};

export const UserProvider = (props) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <>
      {/* Anything passed into value can be used by the children of this Provider */}
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};
