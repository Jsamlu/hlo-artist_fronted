import React from "react";
import { artWorkList } from "./artWorkList";
import { Link } from "react-router-dom";
const Masonary = () => {
  return (
    <div className="px-4 sm:py-20 py-16 md:columns-[300px] sm:columns-[150px] columns-[100px] ">
      {artWorkList.map((artwork) => {
        return (
          <Link key={artwork.name} to={`/masonary/${artwork.name}`} className="">
            <img
              src={artwork.img}
              alt={artwork.name}
              className="img rounded-2xl shadow-2xl border-2 border-gray-300"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Masonary;
