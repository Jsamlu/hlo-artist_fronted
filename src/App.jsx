import { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLogin from "./pages/authentication/UserLogin";
import Home from "./pages/home/Home";
import { AuthContext } from "./context/authContext";
import axios from "axios";
import ArtWorkID from "./pages/home/ArtWorkID";








function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchUser = async () => {
      
      try {
       
        await axios.get("http://localhost:5000/api/me",{ withCredentials: true }).then(
          response => {
            console.log(response.data);
            setUser(response.data.user);
          }
        )
       
      } catch (err) {
        setUser(null); // no token OR invalid token
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          {/* <Route path="/mansonary" element={<Mansonary user={user} />} /> */}
          <Route path="/:name" element={<ArtWorkID user={user} />} />
          <Route path="/login" element={<UserLogin />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
