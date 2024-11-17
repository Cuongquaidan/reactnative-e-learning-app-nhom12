import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <AuthContext.Provider value={{ name, setName, email, setEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
