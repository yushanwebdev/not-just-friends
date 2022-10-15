import { Auth, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../models";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [sub, setSub] = useState("");
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const dbUser = await DataStore.query(User, authUser.attributes.sub);

    setSub(authUser.attributes.sub);
    setUser(dbUser ?? null);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ sub, user }}>
      {children}
    </UserContext.Provider>
  );
};

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { UserContextProvider, useUserContext };
