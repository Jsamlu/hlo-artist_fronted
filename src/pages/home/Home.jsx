import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Masonary from "./Masonary";
const Home = () => {

  const { user } = useContext(AuthContext);
  if (!user) {
    return <div className="bg-[rgb(255,255,255)]">
      <Masonary/>
      <h1>Login to see more</h1>
    </div>;
  } else {
    return<>
      <div>
        <Masonary/>
      </div>
    </> 
  }
};

export default Home;
