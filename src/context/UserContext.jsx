import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [userIn, setUserIn] = useState(false);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleLogin = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setUserIn(true);
      navigate("/profile");
    }
    return user !== "";
  };

  const handleLogout = () => {
    setUserIn(false);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        users,
        handleAddUser,
        handleLogin,
        userIn,
        setUserIn,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const useUserContext = () => useContext(UserContext);
