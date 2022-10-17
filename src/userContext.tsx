import React, { createContext } from "react";
import { User } from "./types";

interface UserContextInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextInterface>({
  user: {id: 0, username: "John Doe", email: "john.doe@gmail.com"},
  setUser: () => {}
});