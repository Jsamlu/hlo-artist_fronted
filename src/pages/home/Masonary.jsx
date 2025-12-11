import React from "react";
import { artWorkList } from "./artWorkList";
import { Link } from "react-router-dom";
const Masonary = () => {
  return (
    <div className=" p-4 md:columns-[200px] sm:columns-[150px] columns-[100px]">
      {artWorkList.map((artwork) => {
        return (
          <Link to={`/${artwork.name}`}>
            <img
              key={artwork.name}
              src={artwork.img}
              alt={artwork.name}
              className="img rounded-2xl space-y-4"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Masonary;
