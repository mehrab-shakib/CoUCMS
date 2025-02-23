import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext"; // Import authentication context

const JoinClub = () => {
  const [clubs, setClubs] = useState([]);
  const [selectedClub, setSelectedClub] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get stored token

    axios
      .get("http://localhost:5000/api/members/clubs", {
        headers: {
          Authorization: `Bearer ${token}`, // Send token properly
        },
      })
      .then((response) => setClubs(response.data))
      .catch((error) => console.error("Error fetching clubs:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedClub) {
      alert("Please select a club to join.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/members/join",
        { clubId: selectedClub },
        { withCredentials: true }
      );

      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Error joining club.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Join a Club</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            className="w-full border rounded-lg px-4 py-2"
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
          >
            <option value="">Select a Club</option>
            {clubs.map((club) => (
              <option key={club.id} value={club.id}>
                {club.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinClub;
