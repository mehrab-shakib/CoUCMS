import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Clubs from "./pages/Clubs";
import ClubDetails from "./pages/ClubDetails";
import Events from "./pages/Events";
import Payments from "./pages/Payments";
import PrivateRoute from "./components/PrivateRoute";
import Recruitment from "./pages/Recruitment";
import AdminDashboard from "./pages/AdminDashboard";
import JoinClub from "./pages/JoinClub";
import { AuthProvider } from "./context/AuthContext";


function App() {
    return (
        <Router>
        <AuthProvider>
       
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/clubs/:id" element={<ClubDetails />} />
                <Route path="/events" element={<Events />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/adminDashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recruitment" element={<Recruitment />} />
                <Route path="/joinClub" element={<JoinClub />} />
            </Routes>
       
        </AuthProvider>
        </Router>
    );
}

export default App;
