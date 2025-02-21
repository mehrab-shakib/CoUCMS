import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    CoU Clubs
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 transition">Home</Link>
                    <Link to="/clubs" className="hover:text-gray-300 transition">Clubs</Link>
                    <Link to="/events" className="hover:text-gray-300 transition">Events</Link>
                </div>

                {/* Auth Links */}
                <div className="space-x-4">
                    {user ? (
                        <>
                            <Link to="/dashboard" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
                                Dashboard
                            </Link>
                            <button
                                onClick={logout}
                                className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition">
                                Login
                            </Link>
                            <Link to="/register" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg transition">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
