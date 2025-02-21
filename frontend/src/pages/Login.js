import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await login(email, password);
    //         console.log(response); // Add this log to see what's being returned
    //         const { token, user } = response.data;
            
    //         localStorage.setItem("token", token);
    //         if (user.role === "admin") {
    //             navigate("/adminDashboard");
    //         } else {
    //             navigate("/dashboard");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            console.log("Login response:", response); // Debugging log
            if (response) {
                const { token, user } = response.data; // Destructure the response
                localStorage.setItem("token", token);
                if (user.role === "admin") {
                    navigate("/adminDashboard");
                } else {
                    navigate("/dashboard");
                }
            } else {
                console.error("No response received from login function");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed. Please check your credentials and try again."); // Notify the user
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600">Welcome Back!</h2>
                <p className="text-gray-500 text-center mb-6">Login to continue</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-600 text-center mt-4">
                    Don't have an account?{" "}
                    <a href="/register" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
