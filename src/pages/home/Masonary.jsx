import React from "react";
import { artWorkList } from "./artWorkList";
const Masonary = () => {
  return (
    <div className=" p-4 columns-2xs">
      {artWorkList.map((artwork) => {
        return (<>
            <img key={artwork.name}
              src={artwork.img}
              alt={artwork.name}
              className="img rounded-2xl space-y-4"
            />
                
            </>
        );
      })}
    <div className="absolute max-w-2xl max-h-1/2 bg-white">hey</div>
    </div>
  );
};

export default Masonary;
