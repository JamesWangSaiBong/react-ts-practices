import { User } from "../types";

export const login: () => Promise<User> = async () => {
  return {
    id: 4,
    username: "bob",
    email: "bob@bob.com"
  };
};