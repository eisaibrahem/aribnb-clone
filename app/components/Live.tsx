import { LiveData } from "../types/app";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";
import MainHeading from "./MainHeading";
import Mysection from "./Mysection";

const Live = async () => {
  const liveData: LiveData = await getLive();
  return (
    <Mysection title="Live anywhere">
      <div className="flex space-x-5 overflow-scroll p-3 no-scrollbar">
        {liveData.map((item) => (
          <LiveCard key={item.img} img={item.img} title={item.title} />
        ))}
      </div>
    </Mysection>
  );
};

export default Live;
