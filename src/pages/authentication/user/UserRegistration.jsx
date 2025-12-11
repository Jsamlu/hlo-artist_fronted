import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";

export default function UserRegistration() {
  // username, email, password, age, contNumber
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const loginApi = "http://localhost:5000/api/login";
  const logOut = "http://localhost:5000/api/logout";

  //handle submit
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        loginApi,
        {
          name,
          userName,
          email,
          password,
          role,
        },
        {
          withCredentials: true,
        }
      );
      setUser(response.data.user);
      console.log("Login successful:", response.data.user);
      navigate("/");
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(logOut);
      setUser(null);
      navigate("/");
      console.log("Logout successful:");
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-xl w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 font-medium">Userame</label>
        <input
          type="username"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="sumbit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
