import React from "react";
import ExploreCard from "./ExploreCard";
import { getExplore } from "../utils/api";
import { ExploreData } from "../types/app";
import MainHeading from "./MainHeading";
import Mysection from "./Mysection";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();

  return (
    <Mysection title="Explore Nearby">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {exploreData.map((item) => (
          <ExploreCard
            key={item.img}
            img={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
    </Mysection>
  );
};

export default Explore;
