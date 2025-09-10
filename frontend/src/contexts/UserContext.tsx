import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  address?: string;
  address2?: string;
  state?: string;
  zip_code?: string;
}

interface UserContextType {
  currentUserData: User | null;
  setCurrentUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ currentUserData, setCurrentUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
