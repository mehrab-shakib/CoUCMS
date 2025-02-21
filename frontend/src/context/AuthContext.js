import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
  });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, []);

   
    const login = async (email, password) => {
        console.log('Login function called');
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            console.log('Response object:', res);
            if (res.data) {
                localStorage.setItem("token", res.data.token);
                setUser(jwtDecode(res.data.token));
                return res.data; // Return the response data
            } else {
                throw new Error("No data returned from the server");
            }
        } catch (error) {
            console.error("Login failed:", error);
            throw error; // Re-throw the error to handle it in the Login component
        }
    };


    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
