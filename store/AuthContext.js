import { createContext, useState } from "react";
import { API_URL } from "config";
const AuthContext = createContext();

// {
//   firstname: "",
//   lastname: "",
//   username: "random",
//   phone_number: "0123456789",
//   email: "random@gmail.com",
//   intro: "",
//   profile: "",
//   profile_picture: "",
//   address: "",
//   city: "",
//   postal_code: "",
//   country: "",
//   gender: "M",
//   birth_date: "",
//   createdAt: "",
//   updatedAt: "",
// }

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Register user
  const register = async ({ username, email, password }) => {
    console.log(username, email, password);
  };

  // Login user
  const login = async ({ email, password }) => {
    console.log(email, password);
  };

  // Logout user
  const logout = async () => {
    console.log("Logout");
  };

  // Check if user is logged in
  const checkUserLoggedIn = async (user) => {
    console.log("Check");
  };

  const context = {
    user,
    error,
    register,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
