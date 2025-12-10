import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Masonary from "./Masonary";
const Home = () => {

  const { user } = useContext(AuthContext);
  if (!user) {
    return <div className="bg-[#101010]">
      <Masonary/>
      
    </div>;
  } else {
    return <div>Logged in as {user.email}</div>;
  }
};

export default Home;
