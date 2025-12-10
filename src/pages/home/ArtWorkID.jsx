import React from "react";
import { useParams } from "react-router-dom";
import { artWorkList } from "./artWorkList";
const ArtWorkID = () => {
  const { name } = useParams();
  console.log(name);
  const art = artWorkList.find((artWork) => artWork.name == name);
  if (!art) {
    return <p className="text-center text-red-500">Activity not found</p>;
  } else {
    return <div>
        <img src={art.img} alt={art.name} />
    </div>;
  }
};

export default ArtWorkID;
